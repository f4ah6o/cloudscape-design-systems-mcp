import * as React from "react";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <ExpandableSection
      variant="container"
      headerActions={<Button>Edit</Button>}
      headerInfo={<Link variant="info">Info</Link>}
      headerText="Additional configuration"
    >
      {" "}
      See your custom configuration here.{" "}
    </ExpandableSection>
  );
};
