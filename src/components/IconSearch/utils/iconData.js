/**
 * Fetch and process icon data - loads both regular and filled icons separately
 * Returns a promise that resolves to an object with both regular and filled icon arrays
 */
export async function fetchIconsData() {
  try {
    // Fetch both regular and filled icon data
    const [regularResponse, filledResponse] = await Promise.all([
      fetch('/data/Animalia.json'),
      fetch('/data/Animalia-Fill.json')
    ]);

    if (!regularResponse.ok || !filledResponse.ok) {
      throw new Error('Failed to fetch icon data');
    }

    const regularData = await regularResponse.json();
    const filledData = await filledResponse.json();

    if (!regularData?.icons || !filledData?.icons) {
      console.error('Icon data not found');
      return { regular: [], filled: [] };
    }

    // Process regular icons (filter out any icons with -fill in the name)
    const regularIcons = regularData.icons
      .filter(icon => !icon.properties.name.includes('-fill'))
      .map((icon, index) => {
        const { properties, icon: iconData } = icon;
        const iconName = properties.name || '';

        return {
          id: `regular-${index}`,
          name: iconName,
          code: properties.code || 0,
          tags: iconData.tags || [],
          paths: iconData.paths || [],
          className: iconName,
          unicode: String.fromCharCode(properties.code),
          searchText: `${iconName} ${(iconData.tags || []).join(' ')}`.toLowerCase(),
          variant: 'regular'
        };
      });

    // Process filled icons (remove -fill suffix from names)
    const filledIcons = filledData.icons.map((icon, index) => {
      const { properties, icon: iconData } = icon;
      const iconName = properties.name.replace('-fill', '') || '';

      return {
        id: `filled-${index}`,
        name: iconName,
        code: properties.code || 0,
        tags: iconData.tags || [],
        paths: iconData.paths || [],
        className: iconName,
        unicode: String.fromCharCode(properties.code),
        searchText: `${iconName} ${(iconData.tags || []).join(' ')}`.toLowerCase(),
        variant: 'filled'
      };
    });

    // Sort both arrays alphabetically by icon name (A→Z)
    regularIcons.sort((a, b) => a.name.localeCompare(b.name));
    filledIcons.sort((a, b) => a.name.localeCompare(b.name));

    return { regular: regularIcons, filled: filledIcons };
  } catch (error) {
    console.error('Error loading icon data:', error);
    return { regular: [], filled: [] };
  }
}

/**
 * Generate the full class name for an icon based on variant
 * @param {string} iconName - The base icon name
 * @param {string} variant - 'regular' or 'filled'
 * @returns {string} Full class name
 */
export function getIconClassName(iconName, variant = 'regular') {
  const baseClass = variant === 'filled' ? 'an-fill' : 'an';
  return `${baseClass} an-${iconName}`;
}

/**
 * Synchronous version for backward compatibility
 * Note: This returns empty array and should not be used directly
 * Use fetchIconsData() instead
 */
export function getIconsData() {
  console.warn('getIconsData is deprecated, use fetchIconsData() instead');
  return [];
}

/**
 * Get all unique tags from icons for filtering
 */
export function getIconTags(icons) {
  const tagsSet = new Set();

  icons.forEach(icon => {
    icon.tags.forEach(tag => {
      if (tag) tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get icon statistics
 */
export function getIconStats(icons) {
  const tags = getIconTags(icons);

  return {
    totalIcons: icons.length,
    totalTags: tags.length
  };
}
