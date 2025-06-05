import * as React from "react";
import Checkbox from "@cloudscape-design/components/checkbox";
export default () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      onChange={({ detail }) => setChecked(detail.checked)}
      checked={checked}
    >
      {" "}
      Transition to standard access storage class{" "}
    </Checkbox>
  );
};
