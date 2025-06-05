import * as React from "react";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
export default () => {
  return (
    <BreadcrumbGroup
      items={[
        { text: "System", href: "#" },
        { text: "Components", href: "#components" },
      ]}
      ariaLabel="Breadcrumbs"
    />
  );
};
