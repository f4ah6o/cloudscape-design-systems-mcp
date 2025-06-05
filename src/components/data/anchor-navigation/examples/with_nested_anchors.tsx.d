import * as React from "react";
import AnchorNavigation from "@cloudscape-design/components/anchor-navigation";
export default () => {
  return (
    <AnchorNavigation
      activeHref="#section111"
      anchors={[
        { text: "Section 1", href: "#section1", level: 1 },
        { text: "Section 1.1", href: "#section11", level: 2 },
        { text: "Section 1.1.1", href: "#section111", level: 3 },
        { text: "Section 2", href: "#section2", level: 1 },
        { text: "Section 3", href: "#section3", level: 1 },
        { text: "Section 4", href: "#section4", level: 1 },
      ]}
    />
  );
};
