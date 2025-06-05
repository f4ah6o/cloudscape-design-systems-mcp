import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
export default () => {
  const [activeHref, setActiveHref] = React.useState(
    "#/parent-page/child-page1",
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
        { type: "link", text: "Page 1", href: "#/page1" },
        { type: "link", text: "Page 2", href: "#/page2" },
        {
          type: "expandable-link-group",
          text: "Parent page",
          href: "#/parent-page",
          items: [
            {
              type: "link",
              text: "Child page 1",
              href: "#/parent-page/child-page1",
            },
            {
              type: "link",
              text: "Child page 2",
              href: "#/parent-page/child-page2",
            },
            {
              type: "link",
              text: "Child page 3",
              href: "#/parent-page/child-page3",
            },
          ],
        },
        { type: "link", text: "Page 4", href: "#/page4" },
        { type: "link", text: "Page 5", href: "#/page5" },
      ]}
    />
  );
};
