import * as React from "react";
import Tabs from "@cloudscape-design/components/tabs";
export default () => {
  const [activeTabId, setActiveTabId] = React.useState("first");
  return (
    <Tabs
      onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
      activeTabId={activeTabId}
      tabs={[
        {
          label: "First tab label",
          id: "first",
          content: "First tab content area",
        },
        {
          label: "Second tab label",
          id: "second",
          content: "Second tab content area",
        },
        {
          label: "Third tab label",
          id: "third",
          content: "Third tab content area",
          disabled: true,
        },
      ]}
    />
  );
};
