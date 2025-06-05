import * as React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Header
      counter="(3)"
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          {" "}
          <Button>Secondary button</Button>{" "}
          <Button variant="primary"> Primary button </Button>{" "}
        </SpaceBetween>
      }
      info={<Link variant="info">Info</Link>}
    >
      {" "}
      Container title{" "}
    </Header>
  );
};
