import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <Alert statusIconAriaLabel="Info" header="Known issues/limitations">
      {" "}
      Review the documentation to learn about potential compatibility issues
      with specific database versions.{" "}
    </Alert>
  );
};
