import * as React from "react";
import AttributeEditor from "@cloudscape-design/components/attribute-editor";
export default () => {
  const [items, setItems] = React.useState([
    {
      key: "some-key-1",
      value: "some-value-1",
      type: { label: "Type 1", value: "0" },
    },
    {
      key: "some-key-2",
      value: "some-value-2",
      type: { label: "Type 2", value: "1" },
    },
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
          warningText: (item, index) =>
            index === 1 ? "Warning message" : null,
        },
        {
          label: "Type",
          control: (item) => (
            <Select
              selectedOption={item.type}
              options={[
                { label: "Type 1", value: "0" },
                { label: "Type 2", value: "1" },
              ]}
            />
          ),
          errorText: (item, index) => (index === 1 ? "Error message" : null),
        },
      ]}
    />
  );
};
