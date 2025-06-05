import * as React from "react";
import TimeInput from "@cloudscape-design/components/time-input";
export default () => {
  const [value, setValue] = React.useState("10:10:30");
  return (
    <TimeInput
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />
  );
};
