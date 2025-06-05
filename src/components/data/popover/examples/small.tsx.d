import * as React from "react";
import Popover from "@cloudscape-design/components/popover";
import Button from "@cloudscape-design/components/button";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
export default () => {
  return (
    <Popover
      dismissButton={false}
      position="top"
      size="small"
      triggerType="custom"
      content={
        <StatusIndicator type="success"> Code snippet copied </StatusIndicator>
      }
    >
      {" "}
      <Button iconName="copy">Copy</Button>{" "}
    </Popover>
  );
};
