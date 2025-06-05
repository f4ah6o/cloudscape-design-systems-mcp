import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
export default () => {
  return (
    <Container
      header={
        <Header variant="h2" description="Container description">
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
