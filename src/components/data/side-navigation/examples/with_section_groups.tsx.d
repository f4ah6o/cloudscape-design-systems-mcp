import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
export default () => {
  const [activeHref, setActiveHref] = React.useState("#/page1");
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
        { type: "divider" },
        {
          type: "section-group",
          title: "Section group",
          items: [
            { type: "link", text: "Page 2", href: "#/page2" },
            { type: "link", text: "Page 3", href: "#/page3" },
          ],
        },
        { type: "divider" },
        {
          type: "section-group",
          title: "Section group",
          items: [
            { type: "link", text: "Page 4", href: "#/page4" },
            {
              type: "section",
              text: "Section",
              items: [
                { type: "link", text: "Page 5", href: "#/page5" },
                { type: "link", text: "Page 6", href: "#/page6" },
              ],
            },
            { type: "link", text: "Page 7", href: "#/page7" },
            {
              type: "expandable-link-group",
              text: "Expandable link group",
              href: "#/exp-link-group",
              items: [
                { type: "link", text: "Page 8", href: "#/page8" },
                { type: "link", text: "Page 9", href: "#/page9" },
              ],
            },
            { type: "link", text: "Page 10", href: "#/page10" },
            {
              type: "link-group",
              text: "Link group",
              href: "#/link-group",
              items: [
                { type: "link", text: "Page 11", href: "#/page11" },
                { type: "link", text: "Page 12", href: "#/page12" },
              ],
            },
            { type: "link", text: "Page 13", href: "#/page13" },
          ],
        },
        { type: "divider" },
        {
          type: "section-group",
          title: "Section group",
          items: [
            { type: "link", text: "Page", href: "#/page14" },
            {
              type: "section",
              text: "Section",
              items: [
                { type: "link", text: "Page 15", href: "#/page15" },
                { type: "link", text: "Page 16", href: "#/page16" },
              ],
            },
          ],
        },
        {
          type: "link",
          text: "Notifications",
          href: "#/notifications",
          info: <Badge color="red">23</Badge>,
        },
        {
          type: "link",
          text: "External Link",
          href: "#",
          external: true,
          externalIconAriaLabel: "Opens in a new tab",
        },
      ]}
    />
  );
};
