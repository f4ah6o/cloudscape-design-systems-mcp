import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        {
          text: "Instances",
          items: [
            { text: "Destroy", id: "destroy" },
            { text: "Restart", id: "restart" },
          ],
        },
        {
          text: "SSH",
          disabled: true,
          items: [{ text: "Upload key", id: "upload" }],
        },
      ]}
    >
      {" "}
      Long label example{" "}
    </ButtonDropdown>
  );
};
