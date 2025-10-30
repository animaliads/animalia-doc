import React from "react";
import TwoColumnLayout from "./two-column-layout";

/**
 * @deprecated Use TwoColumnLayout with variant="image-right" instead
 * This component is kept for backwards compatibility
 */
export default class AnatomyLayoutComponent extends React.Component {
  props: {
    children: React.ReactNode;
    description: React.ReactNode;
  };

  render(): JSX.Element {
    return (
      <TwoColumnLayout
        variant="image-right"
        leftContent={this.props.description}
        rightContent={this.props.children}
      />
    );
  }
}
