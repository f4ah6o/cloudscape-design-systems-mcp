import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Container
      media={{
        content: (
          <Link>
            {" "}
            <img src="/video.jpg" alt="Video thumbnail" />{" "}
          </Link>
        ),
      }}
    >
      {" "}
      <SpaceBetween direction="vertical" size="s">
        {" "}
        <SpaceBetween direction="vertical" size="xxs">
          {" "}
          <Box variant="small">43 min</Box>{" "}
          <Box variant="h2">
            {" "}
            <Link fontSize="heading-m" href="#">
              {" "}
              Video Title{" "}
            </Link>{" "}
          </Box>{" "}
        </SpaceBetween>{" "}
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ut luctus tempor dolor ac accumsan. This is a paragraph. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor
        dolor ac accumsan.{" "}
      </SpaceBetween>{" "}
    </Container>
  );
};
