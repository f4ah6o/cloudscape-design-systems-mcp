import * as React from "react";
import PromptInput from "@cloudscape-design/components/prompt-input";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <PromptInput
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      actionButtonAriaLabel="Send message"
      actionButtonIconName="send"
      ariaLabel="Prompt input with min and max rows"
      maxRows={8}
      minRows={3}
      placeholder="Ask a question"
    />
  );
};
