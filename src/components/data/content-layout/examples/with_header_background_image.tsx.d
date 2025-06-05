import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={(mode) =>
        `center center/cover url("/hero-header-${mode}.png")`
      }
      header={
        <Box padding={{ vertical: "xxxl" }}>
          {" "}
          <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }]}>
            {" "}
            <Container>
              {" "}
              <Box padding="s">
                {" "}
                <Box
                  fontSize="display-l"
                  fontWeight="bold"
                  variant="h1"
                  padding="n"
                >
                  {" "}
                  Cloud software solutions{" "}
                </Box>{" "}
                <Box fontSize="display-l" fontWeight="light">
                  {" "}
                  Industry solutions to unlock innovation{" "}
                </Box>{" "}
                <Box
                  variant="p"
                  color="text-body-secondary"
                  margin={{ top: "xs", bottom: "l" }}
                >
                  {" "}
                  Shorten procurement times, implement the controls you need to
                  operate with confidence, and enable your organization to
                  unlock innovation.{" "}
                </Box>{" "}
                <SpaceBetween direction="horizontal" size="xs">
                  {" "}
                  <Button variant="primary">
                    {" "}
                    Browse by Solution Category{" "}
                  </Button>{" "}
                  <Button> Browse by Solution Industry </Button>{" "}
                </SpaceBetween>{" "}
              </Box>{" "}
            </Container>{" "}
          </Grid>{" "}
        </Box>
      }
    />
  );
};
