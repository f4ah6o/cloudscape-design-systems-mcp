import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
export default () => {
  return (
    <SpaceBetween size="l">
      {" "}
      <Container header={<Header variant="h2"> Distribution settings </Header>}>
        {" "}
        Container content{" "}
      </Container>{" "}
      <Container
        header={<Header variant="h2"> Cache behaviour settings </Header>}
      >
        {" "}
        Container content{" "}
      </Container>{" "}
      <Container header={<Header variant="h2">Container title</Header>}>
        {" "}
        Container content{" "}
      </Container>{" "}
    </SpaceBetween>
  );
};
