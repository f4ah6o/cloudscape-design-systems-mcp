import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Container
      header={
        <Header
          variant="h2"
          description="Container description"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              {" "}
              <Button>Action</Button> <Button>Another action</Button>{" "}
            </SpaceBetween>
          }
        >
          {" "}
          Container title{" "}
        </Header>
      }
    >
      {" "}
      Container content{" "}
    </Container>
  );
};
