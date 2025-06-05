import * as React from "react";
import PromptInput from "@cloudscape-design/components/prompt-input";
import FormField from "@cloudscape-design/components/form-field";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <FormField
      stretch={true}
      label="User prompt"
      constraintText={<>Character count: {value.length} / 100</>}
      errorText={value.length > 100 && "The prompt has too many characters."}
    >
      {" "}
      <PromptInput
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        actionButtonAriaLabel="Send message"
        actionButtonIconName="send"
        placeholder="Ask a question"
      />{" "}
    </FormField>
  );
};
