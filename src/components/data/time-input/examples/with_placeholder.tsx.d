import * as React from "react";
import TimeInput from "@cloudscape-design/components/time-input";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <TimeInput
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      format="hh:mm"
      placeholder="hh:mm"
    />
  );
};
