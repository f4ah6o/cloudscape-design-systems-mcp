import * as React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Header
      variant="h1"
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          {" "}
          <Button>Secondary button</Button>{" "}
          <Button variant="primary"> Primary button </Button>{" "}
        </SpaceBetween>
      }
    >
      {" "}
      Page title{" "}
    </Header>
  );
};
