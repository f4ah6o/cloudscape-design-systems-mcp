import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      headerVariant="high-contrast"
      header={
        <Header
          variant="h1"
          info={<Link variant="info">Info</Link>}
          description="This is a generic description used in the header."
          actions={<Button variant="primary">Button</Button>}
        >
          {" "}
          Header{" "}
        </Header>
      }
    >
      {" "}
      <Container header={<Header variant="h2">Content heading</Header>}>
        {" "}
        Content{" "}
      </Container>{" "}
    </ContentLayout>
  );
};
