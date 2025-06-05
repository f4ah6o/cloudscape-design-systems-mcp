import * as React from "react";
import ProgressBar from "@cloudscape-design/components/progress-bar";
export default () => {
  return (
    <ProgressBar
      resultButtonText="Retry"
      status="error"
      label="Progress bar label"
      resultText="Result text"
    />
  );
};
