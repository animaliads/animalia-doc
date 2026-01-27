import React from "react";
import TOC from "@theme-original/TOC";
import type TOCType from "@theme/TOC";
import type { WrapperProps } from "@docusaurus/types";
import Translate from "@docusaurus/Translate";

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): JSX.Element {
  return (
    <>
      <div className="toc-heading">
        <Translate
          id="theme.TOC.title"
          description="The title for the table of contents"
        >
          On this page
        </Translate>
      </div>
      <TOC {...props} />
    </>
  );
}
