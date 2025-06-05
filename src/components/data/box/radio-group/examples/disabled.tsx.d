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
          disabled: true,
          description: "This option is disabled.",
        },
        { value: "second", label: "Second choice" },
        { value: "third", label: "Third choice" },
      ]}
    />
  );
};
