import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[]}
      disabled
      disabledReason="This action is available in the primary region. You need to switch regions."
    >
      {" "}
      Actions{" "}
    </ButtonDropdown>
  );
};
