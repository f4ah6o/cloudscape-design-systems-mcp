import * as React from "react";
import Header from "@cloudscape-design/components/header";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <Header variant="h3" actions={<Button>Button</Button>}>
      {" "}
      Section title{" "}
    </Header>
  );
};
