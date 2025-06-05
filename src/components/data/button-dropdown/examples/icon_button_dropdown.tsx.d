import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        { id: "start", text: "Start" },
        { id: "stop", text: "Stop", disabled: true },
        { id: "hibernate", text: "Hibernate", disabled: true },
        { id: "reboot", text: "Reboot", disabled: true },
        { id: "terminate", text: "Terminate" },
      ]}
      ariaLabel="Control instance"
      variant="icon"
    />
  );
};
