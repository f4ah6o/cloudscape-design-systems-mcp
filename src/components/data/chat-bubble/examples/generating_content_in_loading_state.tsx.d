import * as React from "react";
import ChatBubble from "@cloudscape-design/chat-components/chat-bubble";
import Avatar from "@cloudscape-design/chat-components/avatar";
import Box from "@cloudscape-design/components/box";
export default () => {
  return (
    <ChatBubble
      ariaLabel="Generative AI assistant at 9:37:50am"
      type="incoming"
      avatar={
        <Avatar
          loading={true}
          color="gen-ai"
          iconName="gen-ai"
          ariaLabel="Generative AI assistant"
          tooltipText="Generative AI assistant"
        />
      }
    >
      {" "}
      <Box color="text-status-inactive"> Generating response </Box>{" "}
    </ChatBubble>
  );
};
