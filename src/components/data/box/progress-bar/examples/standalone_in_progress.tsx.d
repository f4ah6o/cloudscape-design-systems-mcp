import * as React from "react";
import ProgressBar from "@cloudscape-design/components/progress-bar";
export default () => {
  return (
    <ProgressBar
      value={36}
      additionalInfo="Additional information"
      description="Progress bar description"
      label="Progress bar label"
    />
  );
};
