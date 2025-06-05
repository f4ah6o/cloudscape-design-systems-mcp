import * as React from "react";
import ColumnLayout from "@cloudscape-design/components/column-layout";
export default () => {
  return (
    <ColumnLayout borders="horizontal" columns={3}>
      {" "}
      <div>Content</div> <div>Content</div> <div>Content</div>{" "}
      <div>Content</div> <div>Content</div> <div>Content</div>{" "}
      <div>Content</div> <div>Content</div>{" "}
    </ColumnLayout>
  );
};
