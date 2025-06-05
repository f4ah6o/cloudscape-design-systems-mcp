import * as React from "react";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
export default () => {
  return (
    <KeyValuePairs
      columns={4}
      items={[
        {
          label: "ARN",
          value: (
            <CopyToClipboard
              copyButtonAriaLabel="Copy ARN"
              copyErrorText="ARN failed to copy"
              copySuccessText="ARN copied"
              textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4"
              variant="inline"
            />
          ),
        },
        {
          label: "Status",
          value: <StatusIndicator>Available</StatusIndicator>,
        },
        {
          label: "CloudWatch monitoring",
          value: (
            <StatusIndicator type="in-progress"> In progress </StatusIndicator>
          ),
        },
        { label: "Registered container instances", value: "-" },
        {
          type: "group",
          title: "Services",
          items: [
            { label: "Draining", value: "-" },
            { label: "Active", value: "-" },
          ],
        },
        {
          type: "group",
          title: "Health check",
          items: [
            { label: "Healthy", value: "-" },
            { label: "Unhealthy", value: "-" },
          ],
        },
        {
          type: "group",
          title: "Tasks",
          items: [
            { label: "Pending", value: "-" },
            { label: "Running", value: "-" },
          ],
        },
        {
          type: "group",
          title: "Databases",
          items: [
            { label: "Pending", value: "-" },
            { label: "Running", value: "-" },
          ],
        },
      ]}
    />
  );
};
