import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <Alert
      statusIconAriaLabel="Error"
      type="error"
      header="Your instances could not be stopped"
    >
      {" "}
      Remove the instance from the load balancer before stopping it.{" "}
    </Alert>
  );
};
