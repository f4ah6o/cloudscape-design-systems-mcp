import * as React from "react";
import LiveRegion from "@cloudscape-design/components/live-region";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Header
      headingTagOverride="h3"
      actions={
        <SpaceBetween direction="horizontal" size="xs" alignItems="center">
          {" "}
          <Box
            variant="p"
            fontSize="body-s"
            padding="n"
            color="text-status-inactive"
            textAlign="right"
          >
            {" "}
            <LiveRegion>
              {" "}
              <>
                {" "}
                Last updated <br /> December 21, 2023, 14:29 (UTC+01:00){" "}
              </>{" "}
            </LiveRegion>{" "}
          </Box>{" "}
          <Button
            iconName="refresh"
            ariaLabel="Refresh"
            loadingText="Refreshing table content"
          />{" "}
        </SpaceBetween>
      }
    >
      {" "}
      Resources{" "}
    </Header>
  );
};
