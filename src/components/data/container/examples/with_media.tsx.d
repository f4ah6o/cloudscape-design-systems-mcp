import * as React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Container
      media={{
        content: <img src="/image-placeholder.png" alt="placeholder" />,
        height: 200,
        position: "top",
      }}
      footer={
        <div className="container-media-footer">
          {" "}
          <Link href="#">Internal link</Link>{" "}
          <Button iconName="share" variant="icon" />{" "}
        </div>
      }
    >
      {" "}
      <SpaceBetween direction="vertical" size="s">
        {" "}
        <SpaceBetween direction="vertical" size="xxs">
          {" "}
          <Box variant="small">March 10, 2023</Box>{" "}
          <Box variant="h2">Container title</Box>{" "}
        </SpaceBetween>{" "}
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Ut luctus tempor dolor ac accumsan. This is a paragraph. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus tempor
        dolor ac accumsan. <Button>Primary action</Button>{" "}
      </SpaceBetween>{" "}
    </Container>
  );
};
