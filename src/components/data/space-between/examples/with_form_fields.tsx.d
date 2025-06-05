import * as React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
export default () => {
  return (
    <SpaceBetween size="l">
      {" "}
      <FormField
        label="S3 bucket for logs"
        description="The Amazon S3 bucket that you want CloudFront to store your access logs in."
      >
        {" "}
        <Input placeholder="Choose an S3 bucket" />{" "}
      </FormField>
      <FormField
        stretch={true}
        label={<span id="certificate-expiry-label"> Certificate expiry </span>}
        description="Specify the date and time when the certificate should expire."
      >
        {" "}
        <SpaceBetween size="s" direction="horizontal">
          {" "}
          <FormField stretch={true}>
            {" "}
            <Input
              ariaLabelledby="certificate-expiry-label"
              placeholder="YYYY/MM/DD"
            />{" "}
          </FormField>{" "}
          <FormField stretch={true} constraintText="Use 24-hour format.">
            {" "}
            <Input
              ariaLabelledby="certificate-expiry-label"
              placeholder="hh:mm:ss"
            />{" "}
          </FormField>{" "}
        </SpaceBetween>{" "}
      </FormField>{" "}
    </SpaceBetween>
  );
};
