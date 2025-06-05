import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
export default () => {
  const [activeHref, setActiveHref] = React.useState(
    "#/resources-page/resource1/page1",
  );
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "Service name" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        {
          type: "link-group",
          text: "View resources page",
          href: "#/resources-page",
          items: [
            {
              type: "link",
              text: "Resource page 1",
              href: "#/resources-page/resource1/page1",
            },
            {
              type: "link",
              text: "Resource page 2",
              href: "#/resources-page/resource1/page2",
            },
            {
              type: "link",
              text: "Resource page 3",
              href: "#/resources-page/resource1/page3",
            },
          ],
        },
        { type: "link", text: "Page 1", href: "#/page1" },
        { type: "link", text: "Page 2", href: "#/page2" },
        { type: "link", text: "Page 3", href: "#/page3" },
      ]}
    />
  );
};
