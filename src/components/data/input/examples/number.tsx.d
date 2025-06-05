import * as React from "react";
import Input from "@cloudscape-design/components/input";
export default () => {
  const [value, setValue] = React.useState("240");
  return (
    <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      inputMode="numeric"
      type="number"
    />
  );
};
