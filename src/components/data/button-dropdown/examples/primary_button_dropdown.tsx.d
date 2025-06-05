import * as React from "react";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
export default () => {
  return (
    <ButtonDropdown
      items={[
        { text: "Create from live source", id: "create-from-live-source" },
        {
          text: "Create from recorded source",
          id: "create-from-recorded-source",
        },
      ]}
      variant="primary"
    >
      {" "}
      Create new stream{" "}
    </ButtonDropdown>
  );
};
