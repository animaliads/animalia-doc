import React, {useMemo, useState, useEffect} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useTOCHighlight,
  useFilteredAndTreeifiedTOC,
  type TOCHighlightConfig,
} from '@docusaurus/theme-common/internal';
import TOCItemTree from '@theme/TOCItems/Tree';
import type {Props} from '@theme/TOCItems';
import type {TOCItem} from '@docusaurus/mdx-loader';

// Helper function to check if a heading element is inside a visible tab panel
function isHeadingVisible(headingId: string): boolean {
  if (typeof window === 'undefined') {
    return true;
  }

  const headingElement = document.getElementById(headingId);
  if (!headingElement) {
    return true;
  }

  // Check if the heading is inside a tab panel
  const tabPanel = headingElement.closest('[role="tabpanel"]');
  if (!tabPanel) {
    // Not inside a tab, always visible
    return true;
  }

  // Check if the tab panel is hidden
  return !tabPanel.hasAttribute('hidden');
}

// Recursively filter TOC items based on visibility
function filterVisibleTOCItems(items: readonly TOCItem[]): TOCItem[] {
  return items
    .filter(item => isHeadingVisible(item.id))
    .map(item => ({
      ...item,
      children: filterVisibleTOCItems(item.children),
    }));
}

export default function TOCItems({
  toc,
  className = 'table-of-contents table-of-contents__left-border',
  linkClassName = 'table-of-contents__link',
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}: Props): JSX.Element | null {
  const themeConfig = useThemeConfig();
  const [filteredToc, setFilteredToc] = useState(toc);

  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  const tocTree = useFilteredAndTreeifiedTOC({
    toc: filteredToc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  // Listen for tab changes and update filtered TOC
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const updateTOC = () => {
      const visible = filterVisibleTOCItems(toc);
      setFilteredToc(visible);
    };

    // Initial filter
    updateTOC();

    // Listen for clicks on tab buttons
    const handleTabClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[role="tab"]')) {
        // Use a small delay to allow the tab panel to update
        setTimeout(updateTOC, 50);
      }
    };

    document.addEventListener('click', handleTabClick);

    // Also observe DOM mutations in case tabs change programmatically
    const observer = new MutationObserver((mutations) => {
      const hasTabPanelChange = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node =>
          node instanceof Element && node.getAttribute('role') === 'tabpanel'
        ) || Array.from(mutation.removedNodes).some(node =>
          node instanceof Element && node.getAttribute('role') === 'tabpanel'
        );
      });

      if (hasTabPanelChange) {
        updateTOC();
      }
    });

    const articleElement = document.querySelector('article');
    if (articleElement) {
      observer.observe(articleElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['hidden'],
      });
    }

    return () => {
      document.removeEventListener('click', handleTabClick);
      observer.disconnect();
    };
  }, [toc]);

  const tocHighlightConfig: TOCHighlightConfig | undefined = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  useTOCHighlight(tocHighlightConfig);

  return (
    <TOCItemTree
      toc={tocTree}
      className={className}
      linkClassName={linkClassName}
      {...props}
    />
  );
}
