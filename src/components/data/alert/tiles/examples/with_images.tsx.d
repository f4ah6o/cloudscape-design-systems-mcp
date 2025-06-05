import * as React from "react";
import Tiles from "@cloudscape-design/components/tiles";
export default () => {
  const [value, setValue] = React.useState("item1");
  return (
    <Tiles
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      columns={4}
      items={[
        {
          label: "Item 1",
          image: <img src="/image-placeholder.png" alt="placeholder" />,
          value: "item1",
        },
        {
          label: "Item 2",
          image: <img src="/image-placeholder.png" alt="placeholder" />,
          value: "item2",
        },
        {
          label: "Item 3",
          image: <img src="/image-placeholder.png" alt="placeholder" />,
          value: "item3",
        },
        {
          label: "Item 4",
          image: <img src="/image-placeholder.png" alt="placeholder" />,
          value: "item4",
        },
      ]}
    />
  );
};
