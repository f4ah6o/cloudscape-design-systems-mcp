import * as React from "react";
import SupportPromptGroup from "@cloudscape-design/chat-components/support-prompt-group";
export default () => {
  const [value, setValue] = React.useState();
  return (
    <SupportPromptGroup
      onItemClick={({ detail }) => setValue(detail.id)}
      ariaLabel="Default support prompt"
      items={[
        { text: "How can I get started using Amazon S3?", id: "get-started" },
        { text: "How reliable is S3?", id: "s3-reliable" },
      ]}
    />
  );
};
