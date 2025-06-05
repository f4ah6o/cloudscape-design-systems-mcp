import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerVariant="high-contrast"
      maxContentWidth={1200}
      header={
        <Box padding={{ vertical: "l" }}>
          {" "}
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xs: 8, s: 9 } },
              { colspan: { default: 12, xs: 4, s: 3 } },
            ]}
          >
            {" "}
            <div>
              {" "}
              <Box variant="h1">
                {" "}
                Elastic Cloud (Elastic search service){" "}
              </Box>{" "}
              <Box
                variant="p"
                color="text-body-secondary"
                margin={{ top: "xxs", bottom: "s" }}
              >
                {" "}
                With solutions in Enterprise Search, Observability, and
                Security, Elastic enhances customer and employee search
                experiences, keeps mission-critical applications running
                smoothly, and protects against cyber threats.{" "}
              </Box>{" "}
              <SpaceBetween size="xs">
                {" "}
                <div>
                  {" "}
                  Sold by:{" "}
                  <Link variant="primary" href="#">
                    {" "}
                    Elastic{" "}
                  </Link>{" "}
                </div>{" "}
                <div>
                  {" "}
                  Tags:{" "}
                  <Link variant="primary" href="#">
                    {" "}
                    Free trial{" "}
                  </Link>{" "}
                  {" | "}{" "}
                  <Link variant="primary" href="#">
                    {" "}
                    Vendor insights{" "}
                  </Link>{" "}
                </div>{" "}
              </SpaceBetween>{" "}
            </div>
            <Box margin={{ top: "l" }}>
              {" "}
              <SpaceBetween size="s">
                {" "}
                <Button variant="primary" fullWidth={true}>
                  {" "}
                  View purchase options{" "}
                </Button>{" "}
                <Button fullWidth={true}> Request a demo </Button>{" "}
                <Button fullWidth={true}> Save to a list </Button>{" "}
              </SpaceBetween>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Box>
      }
    >
      {" "}
      <Box variant="h2" padding={{ top: "xxxl" }}>
        {" "}
        Content heading{" "}
      </Box>
      <Box variant="p">This is a content paragraph.</Box>{" "}
    </ContentLayout>
  );
};
