import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
export default () => {
  return (
    <SpaceBetween direction="horizontal" size="l">
      {" "}
      <SpaceBetween size="xs">
        {" "}
        <div>Content one</div> <div>Content two</div>{" "}
        <div>Content three</div>{" "}
      </SpaceBetween>
      <SpaceBetween size="s">
        {" "}
        <div>Content four</div> <div>Content five</div>{" "}
      </SpaceBetween>
      <SpaceBetween size="m">
        {" "}
        <div>Content six</div> <div>Content seven</div>{" "}
        <div>Content eight</div>{" "}
      </SpaceBetween>{" "}
    </SpaceBetween>
  );
};
