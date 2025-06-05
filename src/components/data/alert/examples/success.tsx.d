import * as React from "react";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <Alert dismissible statusIconAriaLabel="Success" type="success">
      {" "}
      Your instance has been created successfully.{" "}
    </Alert>
  );
};
