import * as React from "react";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
export default () => {
  const [preferences, setPreferences] = React.useState({
    pageSize: 10,
    visibleContent: ["id", "domainName", "deliveryMethod"],
  });
  return (
    <CollectionPreferences
      onConfirm={({ detail }) => setPreferences(detail)}
      preferences={preferences}
      pageSizePreference={{
        options: [
          { value: 10, label: "10 resources" },
          { value: 20, label: "20 resources" },
        ],
      }}
      visibleContentPreference={{
        title: "Select visible content",
        options: [
          {
            label: "Main distribution properties",
            options: [
              { id: "id", label: "Distribution ID", editable: false },
              { id: "domainName", label: "Domain name" },
              { id: "deliveryMethod", label: "Delivery method" },
            ],
          },
          {
            label: "Secondary distribution properties",
            options: [
              { id: "priceClass", label: "Price class" },
              { id: "sslCertificate", label: "SSL certificate" },
              { id: "origin", label: "Origin" },
            ],
          },
        ],
      }}
      customPreference={() => (
        <FormField label="View as">
          {" "}
          <RadioGroup
            value="cards"
            items={[
              { value: "table", label: "Table" },
              { value: "cards", label: "Cards" },
            ]}
          />{" "}
        </FormField>
      )}
    />
  );
};
