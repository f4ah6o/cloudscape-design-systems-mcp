import * as React from "react";
import Steps from "@cloudscape-design/components/steps";
export default () => {
  return (
    <Steps
      steps={[
        {
          status: "success",
          header: "Success step",
          statusIconAriaLabel: "Success",
        },
        {
          status: "loading",
          header: "Loading step",
          statusIconAriaLabel: "Loading",
        },
      ]}
    />
  );
};
