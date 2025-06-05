import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        {
          text: "Settings group",
          id: "setting-group",
          items: [
            {
              text: "Setting",
              id: "setting",
              itemType: "checkbox",
              checked: true,
              disabled: false,
            },
            {
              text: "Disabled setting",
              id: "setting",
              itemType: "checkbox",
              checked: true,
              disabled: true,
            },
          ],
        },
        { text: "Action", id: "action", disabled: false },
      ]}
    >
      {" "}
      Selectable example{" "}
    </ButtonDropdown>
  );
};
