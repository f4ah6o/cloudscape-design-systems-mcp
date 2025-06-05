import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        { id: "connect", text: "Connect" },
        { id: "password", text: "Get password" },
        {
          id: "states",
          text: "Instance State",
          items: [
            { id: "start", text: "Start" },
            { id: "stop", text: "Stop", disabled: true },
            { id: "hibernate", text: "Hibernate", disabled: true },
            { id: "reboot", text: "Reboot", disabled: true },
            { id: "terminate", text: "Terminate" },
          ],
        },
      ]}
      expandableGroups
    >
      {" "}
      Actions{" "}
    </ButtonDropdown>
  );
};
