import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        {
          text: "Launch instance from template",
          id: "launch-instance-from-template",
        },
      ]}
      mainAction={{ text: "Launch instance" }}
      variant="primary"
    />
  );
};
