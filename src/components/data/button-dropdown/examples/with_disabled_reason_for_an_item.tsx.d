import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        { text: "View", id: "view" },
        {
          text: "Delete",
          id: "rm",
          disabled: true,
          disabledReason:
            "This action is available in the primary region. You need to switch regions.",
        },
        { text: "Move", id: "mv" },
        { text: "Rename", id: "rn" },
      ]}
    >
      {" "}
      Actions{" "}
    </ButtonDropdown>
  );
};
