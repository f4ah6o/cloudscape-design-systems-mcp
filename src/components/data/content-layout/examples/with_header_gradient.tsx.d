import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      headerBackgroundStyle="linear-gradient(135deg, rgb(71, 17, 118) 3%, rgb(131, 57, 157) 44%, rgb(149, 85, 182) 69%, rgb(145, 134, 215) 94%)"
      headerVariant="high-contrast"
      maxContentWidth={800}
      header={<Header variant="h1">Header</Header>}
    >
      {" "}
      <Container header={<Header variant="h2">Content heading</Header>}>
        {" "}
        Content{" "}
      </Container>{" "}
    </ContentLayout>
  );
};
