import * as React from "react";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
export default () => {
  return (
    <BreadcrumbGroup
      items={[
        { text: "Service name", href: "#" },
        { text: "Sub-service", href: "#sub-service" },
        { text: "Main category with a long name", href: "#main-category" },
        {
          text: "Secondary category with a long name",
          href: "#secondary-category",
        },
        { text: "Resource type", href: "#resource-type" },
        { text: "Resource sub-type", href: "#resource-sub-type" },
        {
          text: "resource-name-7880-l09mdsdnebh-1894398823",
          href: "#resource-name-7880-l09mdsdnebh-1894398823",
        },
      ]}
      ariaLabel="Breadcrumbs"
    />
  );
};
