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
          action: (
            <ButtonDropdown
              variant="icon"
              ariaLabel="Query actions for first tab"
              items={[
                { id: "save", text: "Save" },
                { id: "saveAs", text: "Save as" },
                { id: "rename", text: "Rename" },
              ]}
              expandToViewport={true}
            />
          ),
        },
        {
          label: "Second tab label",
          id: "second",
          content: "Second tab content area",
          action: (
            <ButtonDropdown
              variant="icon"
              ariaLabel="Query actions for second tab"
              items={[
                { id: "save", text: "Save" },
                { id: "saveAs", text: "Save as" },
                { id: "rename", text: "Rename" },
              ]}
              expandToViewport={true}
            />
          ),
        },
      ]}
    />
  );
};
