import * as React from "react";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <ExpandableSection
      headerActions={
        <Button variant="inline-link" ariaLabel="Remove security group rule">
          {" "}
          Remove{" "}
        </Button>
      }
      headerText="Security group rule"
    >
      {" "}
      See your security group rule here.{" "}
    </ExpandableSection>
  );
};
