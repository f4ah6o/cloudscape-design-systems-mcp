import * as React from "react";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Button
      disabled
      disabledReason="This action is available in the primary region. You need to switch regions."
      variant="primary"
    >
      {" "}
      Delete{" "}
    </Button>
  );
};
