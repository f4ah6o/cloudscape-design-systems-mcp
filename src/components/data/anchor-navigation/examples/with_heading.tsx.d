import * as React from "react";
import AnchorNavigation from "@cloudscape-design/components/anchor-navigation";
import Header from "@cloudscape-design/components/header";
export default () => {
  return (
    <div>
      {" "}
      <Header variant="h3">
        {" "}
        <span id="navigation-header">On this page</span>{" "}
      </Header>{" "}
      <AnchorNavigation
        anchors={[
          { text: "Section 1", href: "#section1", level: 1 },
          { text: "Section 2", href: "#section2", level: 1 },
          { text: "Section 3", href: "#section3", level: 1 },
          { text: "Section 4", href: "#section4", level: 1 },
        ]}
        ariaLabelledby="navigation-header"
      />{" "}
    </div>
  );
};
