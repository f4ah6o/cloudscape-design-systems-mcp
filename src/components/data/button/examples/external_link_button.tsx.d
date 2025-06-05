import * as React from "react";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Button
      ariaLabel="Report a bug (opens new tab)"
      href="https://example.com"
      iconAlign="right"
      iconName="external"
      target="_blank"
    >
      {" "}
      Report a bug{" "}
    </Button>
  );
};
