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
