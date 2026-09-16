import React from "react";
import OriginalTabs from "@theme-original/Tabs";

const CODE_TAB_VALUE = "dev";
const COMPONENT_TABS_CLASS = "button-tabs-sticky";

function isComponentTabs(className) {
  return String(className ?? "")
    .split(/\s+/)
    .includes(COMPONENT_TABS_CLASS);
}

function isCodeTab(child) {
  return React.isValidElement(child) && child.props?.value === CODE_TAB_VALUE;
}

export default function Tabs(props) {
  if (!isComponentTabs(props.className)) {
    return <OriginalTabs {...props} />;
  }

  const values = props.values?.filter((tab) => tab.value !== CODE_TAB_VALUE);
  const children = React.Children.toArray(props.children).filter(
    (child) => !isCodeTab(child),
  );

  return <OriginalTabs {...props} values={values} children={children} />;
}
