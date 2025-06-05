import * as React from "react";
import Popover from "@cloudscape-design/components/popover";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Popover
      fixedWidth
      header="Network interface eth0"
      size="large"
      content={
        <KeyValuePairs
          columns={2}
          items={[
            {
              label: "Interface ID",
              value: (
                <Link href="#" variant="primary">
                  {" "}
                  eni-055da457bed9bbbe6{" "}
                </Link>
              ),
            },
            { label: "Private IP address", value: "192.0.2.0" },
            { label: "VPC ID", value: "vpc-626163728" },
            { label: "Private DNS name", value: "example.com" },
            { label: "Attachment owner", value: "vpc-626163728" },
            { label: "Public IP address", value: "198.51.100.0" },
            { label: "Attached", value: "May 4, 2010, 04:56 (UTC+3:30)" },
            { label: "Source/Dest. check", value: "true" },
            { label: "Delete on terminate", value: "true" },
            { label: "Description", value: "-" },
          ]}
        />
      }
    >
      {" "}
      eth0{" "}
    </Popover>
  );
};
