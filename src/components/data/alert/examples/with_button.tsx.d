import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Alert
      statusIconAriaLabel="Info"
      action={<Button>Enable versioning</Button>}
      header="Versioning is not enabled"
    >
      {" "}
      Versioning is not enabled for objects in bucket [IAM-user].{" "}
    </Alert>
  );
};
