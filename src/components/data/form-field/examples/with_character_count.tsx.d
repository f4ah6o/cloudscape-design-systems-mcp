import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
export default () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <FormField
      errorText={inputValue.length > 10 && "The name has too many characters."}
      constraintText={
        <>
          {" "}
          Name must be 1 to 10 characters. Character count: {inputValue.length}
          /10{" "}
        </>
      }
      label={
        <span>
          {" "}
          Name <i>- optional</i>{" "}
        </span>
      }
    >
      {" "}
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.detail.value)}
      />{" "}
    </FormField>
  );
};
