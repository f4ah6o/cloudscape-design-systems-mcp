import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Checkbox from "@cloudscape-design/components/checkbox";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <FormField
      description={
        <>
          {" "}
          Please read through our{" "}
          <Link href="#" external="true" variant="primary" fontSize="body-s">
            {" "}
            terms and conditions{" "}
          </Link>{" "}
          and agree.{" "}
        </>
      }
      label="Terms and conditions"
    >
      {" "}
      <Checkbox> I agree to the terms and conditions </Checkbox>{" "}
    </FormField>
  );
};
