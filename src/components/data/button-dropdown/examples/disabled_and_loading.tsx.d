import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[{ id: "id-1", text: "Nothing to see here" }]}
      disabled
      loading
    >
      {" "}
      Disabled{" "}
    </ButtonDropdown>
  );
};
