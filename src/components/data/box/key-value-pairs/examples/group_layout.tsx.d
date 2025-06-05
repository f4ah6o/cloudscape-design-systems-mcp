import * as React from "react";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
export default () => {
  return (
    <KeyValuePairs
      columns={2}
      items={[
        {
          type: "group",
          title: "Column Title 1",
          items: [
            { label: "Label for key 1.1", value: "Value 1" },
            {
              label: "Label for key 1.2",
              value: (
                <StatusIndicator> Value for positive status </StatusIndicator>
              ),
            },
          ],
        },
        {
          type: "group",
          title: "Column Title 2",
          items: [
            { label: "Label for key 2.1", value: "Value" },
            {
              label: "Label for key 2.2",
              value: (
                <Link external={true} href="#" ariaLabel="Label for key 2.2">
                  {" "}
                  Value with external link{" "}
                </Link>
              ),
            },
          ],
        },
        {
          type: "group",
          title: "Column Title 3",
          items: [
            { label: "Label for key 3.1", value: "Value" },
            {
              label: "Label for key 3.2",
              value: (
                <StatusIndicator> Value for positive status </StatusIndicator>
              ),
            },
          ],
        },
        {
          type: "group",
          title: "Column Title 4",
          items: [
            { label: "Label for key 4.1", value: "Value" },
            {
              label: "Label for key 4.2",
              value: (
                <Link external={true} href="#" ariaLabel="Label for key 4.2">
                  {" "}
                  Value with external link{" "}
                </Link>
              ),
            },
          ],
        },
      ]}
    />
  );
};
