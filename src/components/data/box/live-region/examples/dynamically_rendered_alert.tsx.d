import * as React from "react";
import LiveRegion from "@cloudscape-design/components/live-region";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <LiveRegion>
      {" "}
      <Alert
        type="error"
        statusIconAriaLabel="Error"
        header="Your instances could not be stopped"
      >
        {" "}
        Remove the instance from the load balancer before stopping it.{" "}
      </Alert>{" "}
    </LiveRegion>
  );
};
