import * as React from "react";
import Tiles from "@cloudscape-design/components/tiles";
export default () => {
  const [value, setValue] = React.useState("item1");
  return (
    <Tiles
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      items={[
        { label: "Item 1 label", value: "item1" },
        { label: "Item 2 label", value: "item2" },
        { label: "Item 3 label", value: "item3" },
      ]}
    />
  );
};
