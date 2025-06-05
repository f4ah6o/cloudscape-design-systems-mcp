import * as React from "react";
import ColumnLayout from "@cloudscape-design/components/column-layout";
export default () => {
  return (
    <ColumnLayout columns={3} variant="text-grid">
      {" "}
      <div>
        {" "}
        Use this variant when you have text content inside columns.{" "}
      </div>{" "}
      <div>
        {" "}
        Use this variant when you have text content inside columns.{" "}
      </div>{" "}
      <div>
        {" "}
        Use this variant when you have text content inside columns.{" "}
      </div>{" "}
    </ColumnLayout>
  );
};
