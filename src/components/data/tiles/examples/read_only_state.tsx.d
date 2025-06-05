import * as React from "react";
import Tiles from "@cloudscape-design/components/tiles";
export default () => {
  const [value, setValue] = React.useState("item1");
  return (
    <Tiles
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      items={[
        {
          label: "Item 1 label",
          description: "This is a description for item 1",
          value: "item1",
        },
        {
          label: "Item 2 label",
          description: "This is a description for item 2",
          value: "item2",
        },
        {
          label: "Item 3 label",
          description: "This is a description for item 3",
          value: "item3",
        },
        {
          label: "Item 4 label",
          description: "This is a description for item 4",
          value: "item4",
        },
      ]}
      readOnly
    />
  );
};
