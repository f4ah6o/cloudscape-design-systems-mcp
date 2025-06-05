import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [activeHref, setActiveHref] = React.useState("#/page2");
  const [allItems, setAllItems] = React.useState([
    { type: "link", text: "Page 1", href: "#/page1" },
    { type: "link", text: "Page 2", href: "#/page2" },
    {
      type: "section",
      text: "Section 1",
      items: [
        { type: "link", text: "Page 4", href: "#/page4" },
        { type: "link", text: "Page 5", href: "#/page5" },
        { type: "link", text: "Page 6", href: "#/page6" },
      ],
    },
    {
      type: "section",
      text: "Section 2",
      items: [
        { type: "link", text: "Page 7", href: "#/page7" },
        { type: "link", text: "Page 8", href: "#/page8" },
        { type: "link", text: "Page 9", href: "#/page9" },
      ],
    },
  ]);
  const [activeView, setActiveView] = React.useState({
    label: "View 1",
    value: "view1",
  });
  const [items, setItems] = React.useState(allItems);
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
      allItems={allItems}
      items={items}
      itemsControl={
        <Select
          selectedOption={activeView}
          options={[
            { label: "View 1", value: "view1" },
            { label: "View 2", value: "view2" },
          ]}
          onChange={({ detail }) => {
            if (detail.selectedOption.value === "view1") {
              setItems(allItems);
            } else {
              setItems(allItems.filter((i) => i.text !== "Section 2"));
            }
            setActiveView(detail.selectedOption);
          }}
        />
      }
    />
  );
};
