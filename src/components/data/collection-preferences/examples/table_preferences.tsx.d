import * as React from "react";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
export default () => {
  const [preferences, setPreferences] = React.useState({
    pageSize: 10,
    wrapLines: true,
    stickyColumns: { first: 1, last: 0 },
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
      wrapLinesPreference={{}}
      stripedRowsPreference={{}}
      contentDensityPreference={{}}
      contentDisplayPreference={{
        options: [
          { id: "id", label: "Distribution ID", alwaysVisible: true },
          { id: "domainName", label: "Domain name" },
          { id: "deliveryMethod", label: "Delivery method" },
          { id: "priceClass", label: "Price class" },
          { id: "sslCertificate", label: "SSL certificate" },
          { id: "origin", label: "Origin" },
        ],
      }}
      stickyColumnsPreference={{
        firstColumns: {
          title: "Stick first column(s)",
          description:
            "Keep the first column(s) visible while horizontally scrolling the table content.",
          options: [
            { label: "None", value: 0 },
            { label: "First column", value: 1 },
            { label: "First two columns", value: 2 },
          ],
        },
        lastColumns: {
          title: "Stick last column",
          description:
            "Keep the last column visible while horizontally scrolling the table content.",
          options: [
            { label: "None", value: 0 },
            { label: "Last column", value: 1 },
          ],
        },
      }}
    />
  );
};
