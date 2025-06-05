import * as React from "react";
import Tabs from "@cloudscape-design/components/tabs";
export default () => {
  return (
    <Tabs
      tabs={[
        {
          label: "First tab label",
          id: "first",
          content: "First tab content area",
          dismissible: true,
          dismissLabel: "Dismiss first tab",
        },
        {
          label: "Second tab label",
          id: "second",
          content: "Second tab content area",
          dismissible: true,
          dismissLabel: "Dismiss second tab",
        },
      ]}
    />
  );
};
