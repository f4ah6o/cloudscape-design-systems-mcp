import * as React from "react";
import RadioGroup from "@cloudscape-design/components/radio-group";
export default () => {
  const [value, setValue] = React.useState("second");
  return (
    <RadioGroup
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      items={[
        {
          value: "first",
          label: "First choice",
          description: "This is the first option.",
        },
        {
          value: "second",
          label: "Second choice",
          description: "This is the second option.",
        },
        {
          value: "third",
          label: "Third choice",
          description: "This is the third option.",
        },
      ]}
      readOnly
    />
  );
};
