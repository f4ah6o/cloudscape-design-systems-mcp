import * as React from "react";
import Toggle from "@cloudscape-design/components/toggle";
export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Toggle
      onChange={({ detail }) => setChecked(detail.checked)}
      checked={checked}
    >
      {" "}
      Toggle{" "}
    </Toggle>
  );
};
