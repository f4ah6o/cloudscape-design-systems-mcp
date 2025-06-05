import * as React from "react";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Box float="right">
      {" "}
      <SpaceBetween direction="horizontal" size="xs">
        {" "}
        <Button>Edit</Button> <Button>Delete</Button>{" "}
        <Button variant="primary"> Create distribution </Button>{" "}
      </SpaceBetween>{" "}
    </Box>
  );
};
