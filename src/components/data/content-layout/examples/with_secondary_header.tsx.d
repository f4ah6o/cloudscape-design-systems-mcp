import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Container from "@cloudscape-design/components/container";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerVariant="high-contrast"
      header={
        <Header
          variant="h1"
          info={<Link variant="info">Info</Link>}
          description="This is a generic description used in the header."
        >
          {" "}
          Header{" "}
        </Header>
      }
      secondaryHeader={<Container>Secondary header</Container>}
    >
      {" "}
      <Box variant="h2" padding={{ top: "m" }}>
        {" "}
        Content heading{" "}
      </Box>
      <Box variant="p">This is a content paragraph.</Box>{" "}
    </ContentLayout>
  );
};
