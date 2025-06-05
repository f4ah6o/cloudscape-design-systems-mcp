import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <Alert statusIconAriaLabel="Warning" type="warning">
      {" "}
      Changing the configuration might require stopping the instance.{" "}
    </Alert>
  );
};
