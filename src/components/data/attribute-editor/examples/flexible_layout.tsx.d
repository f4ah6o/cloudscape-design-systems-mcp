import * as React from "react";
import AttributeEditor from "@cloudscape-design/components/attribute-editor";
export default () => {
  const [items, setItems] = React.useState([
    {
      key: "key-1",
      option: { label: "Option 1", value: "1" },
      value: "some-value-1",
      value2: {
        type: "absolute",
        startDate: "2024-01-09T12:34:56",
        endDate: "2024-01-19T15:30:00",
      },
    },
    {
      key: "key-2",
      option: { label: "Option 2", value: "2" },
      value: "some-value-2",
      value2: { type: "relative", amount: 12, unit: "day" },
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
      gridLayout={[
        {
          rows: [[1, 2, 4]],
          removeButton: { ownRow: false, width: "auto" },
          breakpoint: "s",
        },
        {
          rows: [[1, 2, 4]],
          removeButton: { ownRow: true, width: "auto" },
          breakpoint: "xs",
        },
        { rows: [[1, 2], [4]], breakpoint: "xxs" },
        { rows: [[1], [1], [1]] },
      ]}
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
        {
          label: "Longer value",
          control: (item) => (
            <DateRangePicker
              value={item.value2}
              placeholder="Filter by a date and time range"
            />
          ),
        },
      ]}
      empty="No items associated with the resource."
    />
  );
};
