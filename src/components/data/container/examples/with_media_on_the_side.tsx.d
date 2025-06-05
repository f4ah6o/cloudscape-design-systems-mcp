import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Container
      media={{
        content: <img src="/image-placeholder.png" alt="placeholder" />,
        position: "side",
        width: "33%",
      }}
    >
      {" "}
      <SpaceBetween direction="vertical" size="s">
        {" "}
        <SpaceBetween direction="vertical" size="xxs">
          {" "}
          <Box variant="h2">
            {" "}
            <Link fontSize="heading-m" href="#">
              {" "}
              Product title{" "}
            </Link>{" "}
          </Box>{" "}
          <Box variant="small">Company name</Box>{" "}
        </SpaceBetween>{" "}
        <Box variant="p">
          {" "}
          This is a paragraph. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut luctus tempor dolor ac accumsan. This is a
          paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          luctus tempor dolor ac accumsan.{" "}
        </Box>{" "}
        <SpaceBetween direction="vertical" size="xxs">
          {" "}
          <Box fontSize="body-s">Start at</Box>{" "}
          <Box fontWeight="bold">$0.1/hour</Box>{" "}
        </SpaceBetween>{" "}
        <Button>Shop now</Button>{" "}
      </SpaceBetween>{" "}
    </Container>
  );
};
