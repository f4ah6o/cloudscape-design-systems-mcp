import * as React from "react";
import Popover from "@cloudscape-design/components/popover";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Box from "@cloudscape-design/components/box";
export default () => {
  return (
    <Box color="text-status-error">
      {" "}
      <Popover
        header="Memory Error"
        content="This instance contains insufficient memory. Stop the instance, choose a different instance type with more memory, and restart it."
      >
        {" "}
        <StatusIndicator type="error"> Error </StatusIndicator>{" "}
      </Popover>{" "}
    </Box>
  );
};
