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
      ]}
    />
  );
};
