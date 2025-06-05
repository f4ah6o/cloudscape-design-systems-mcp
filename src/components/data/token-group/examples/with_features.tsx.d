import * as React from "react";
import TokenGroup from "@cloudscape-design/components/token-group";
export default () => {
  const [items, setItems] = React.useState([
    {
      label: "Item 1",
      description: "This is a description for item 1",
      labelTag: "Label tag 1",
      tags: ["Tag 1", "Tag 2"],
      dismissLabel: "Remove item 1",
      iconName: "share",
    },
    {
      label: "Item 2",
      description: "This is a description for item 2",
      labelTag: "Label tag 2",
      tags: ["Tag 1", "Tag 2"],
      dismissLabel: "Remove item 2",
      iconName: "settings",
    },
    {
      label: "Item 3",
      description: "This is a description for item 3",
      labelTag: "Label tag 3",
      tags: ["Tag 1", "Tag 2"],
      dismissLabel: "Remove item 3",
      iconName: "key",
    },
  ]);
  return (
    <TokenGroup
      onDismiss={({ detail: { itemIndex } }) => {
        setItems([...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)]);
      }}
      items={items}
    />
  );
};
