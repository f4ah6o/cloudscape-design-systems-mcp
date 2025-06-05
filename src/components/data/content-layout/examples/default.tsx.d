import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Alert from "@cloudscape-design/components/alert";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      header={
        <SpaceBetween size="m">
          {" "}
          <Header
            variant="h1"
            info={<Link variant="info">Info</Link>}
            description="This is a generic description used in the header."
          >
            {" "}
            Header{" "}
          </Header>
          <Alert statusIconAriaLabel="Info">
            {" "}
            This is a generic alert.{" "}
          </Alert>{" "}
        </SpaceBetween>
      }
    >
      {" "}
      <Container
        header={
          <Header variant="h2" description="Container description">
            {" "}
            Container header{" "}
          </Header>
        }
      >
        {" "}
        Container content{" "}
      </Container>{" "}
    </ContentLayout>
  );
};
