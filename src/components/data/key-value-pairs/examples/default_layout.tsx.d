import * as React from "react";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
export default () => {
  return (
    <KeyValuePairs
      columns={3}
      items={[
        {
          label: "Distribution ID",
          value: "E1WG1ZNPRXT0D4",
          info: (
            <Link variant="info" href="#">
              {" "}
              Info{" "}
            </Link>
          ),
        },
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
          label: "SSL Certificate",
          id: "ssl-certificate-id",
          value: (
            <ProgressBar
              value={30}
              additionalInfo="Additional information"
              description="Progress bar description"
              ariaLabelledby="ssl-certificate-id"
            />
          ),
        },
        { label: "Price class", value: "Use only US, Canada, Europe" },
        {
          label: "CNAMEs",
          value: (
            <Link external={true} href="#">
              {" "}
              abc.service23G24.xyz{" "}
            </Link>
          ),
        },
        {
          label: (
            <SpaceBetween direction="horizontal" size="xxs" alignItems="center">
              {" "}
              <div key="label">IP Addresses</div>{" "}
              <Icon key="icon" name="external" />{" "}
            </SpaceBetween>
          ),
          value: (
            <SpaceBetween size="xxxs">
              {" "}
              <Link target="_blank" href="#" variant="secondary">
                {" "}
                192.168.0.1{" "}
              </Link>{" "}
              <Link target="_blank" href="#" variant="secondary">
                {" "}
                192.168.0.2{" "}
              </Link>{" "}
              <Link target="_blank" href="#" variant="secondary">
                {" "}
                192.168.0.3{" "}
              </Link>{" "}
            </SpaceBetween>
          ),
        },
      ]}
    />
  );
};
