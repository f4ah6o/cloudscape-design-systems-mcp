import * as React from "react";
import Container from "@cloudscape-design/components/container";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Header from "@cloudscape-design/components/header";
export default () => {
  return (
    <Container
      footer={
        <ExpandableSection header="Additional settings" variant="footer">
          {" "}
          Place additional form fields here.{" "}
        </ExpandableSection>
      }
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
