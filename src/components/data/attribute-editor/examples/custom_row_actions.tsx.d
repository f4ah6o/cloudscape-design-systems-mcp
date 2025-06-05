import * as React from "react";
import AttributeEditor from "@cloudscape-design/components/attribute-editor";
export default () => {
  const [items, setItems] = React.useState([
    { key: "some-key-1", value: "some-value-1" },
    { key: "some-key-2", value: "some-value-2" },
  ]);
  return (
    <AttributeEditor
      onAddButtonClick={() => setItems([...items, {}])}
      onRemoveButtonClick={({ detail: { itemIndex } }) => {
        const tmpItems = [...items];
        tmpItems.splice(itemIndex, 1);
        setItems(tmpItems);
      }}
      items={items}
      customRowActions={({ itemIndex }) => {
        const onClick = ({ detail: { id } }) => {
          const tmpItems = [...items];
          const item = tmpItems[itemIndex];
          switch (id) {
            case "move-up":
              tmpItems[itemIndex] = tmpItems[itemIndex - 1];
              tmpItems[itemIndex - 1] = item;
              break;
            case "move-down":
              tmpItems[itemIndex] = tmpItems[itemIndex + 1];
              tmpItems[itemIndex + 1] = item;
              break;
          }
          setItems(tmpItems);
        };
        return (
          <ButtonDropdown
            items={[
              { text: "Move up", id: "move-up" },
              { text: "Move down", id: "move-down" },
            ]}
            ariaLabel={`Remove item ${itemIndex + 1}`}
            mainAction={{
              text: "Remove",
              onClick: () => {
                const tmpItems = [...items];
                tmpItems.splice(itemIndex, 1);
                setItems(tmpItems);
              },
            }}
            onItemClick={onClick}
          />
        );
      }}
      addButtonText="Add new item"
      definition={[
        {
          label: "Key",
          control: (item) => <Input value={item.key} placeholder="Enter key" />,
        },
        {
          label: "Value",
          control: (item) => (
            <Input value={item.value} placeholder="Enter value" />
          ),
        },
      ]}
      empty="No items associated with the resource."
    />
  );
};
