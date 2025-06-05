import * as React from "react";
import TokenGroup from "@cloudscape-design/components/token-group";
export default () => {
  const [items, setItems] = React.useState([
    { label: "Item 1", dismissLabel: "Remove item 1" },
    { label: "Item 2", dismissLabel: "Remove item 2" },
    { label: "Item 3", dismissLabel: "Remove item 3" },
  ]);
  return (
    <TokenGroup
      onDismiss={({ detail: { itemIndex } }) => {
        setItems([...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)]);
      }}
      items={items}
      alignment="vertical"
    />
  );
};
