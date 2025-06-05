import * as React from "react";
import Textarea from "@cloudscape-design/components/textarea";
export default () => {
  const [value, setValue] = React.useState(
    "Non-empty value: Placeholder should be hidden",
  );
  return (
    <Textarea
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      placeholder="This is a placeholder"
    />
  );
};
