import * as React from "react";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
export default () => {
  return (
    <ExpandableSection headerText="Static website hosting">
      {" "}
      After you enable your S3 bucket for static website hosting, web browsers
      can access your content through the Amazon S3 website endpoint for the
      bucket.{" "}
    </ExpandableSection>
  );
};
