import * as React from "react";
import AnchorNavigation from "@cloudscape-design/components/anchor-navigation";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
export default () => {
  return (
    <ExpandableSection
      defaultExpanded
      variant="footer"
      headerText={<span id="navigation-header">On this page</span>}
    >
      {" "}
      <AnchorNavigation
        anchors={[
          { text: "Section 1", href: "#section1", level: 1 },
          { text: "Section 2", href: "#section2", level: 1 },
          { text: "Section 3", href: "#section3", level: 1 },
          { text: "Section 4", href: "#section4", level: 1 },
        ]}
        ariaLabelledby="navigation-header"
      />{" "}
    </ExpandableSection>
  );
};
