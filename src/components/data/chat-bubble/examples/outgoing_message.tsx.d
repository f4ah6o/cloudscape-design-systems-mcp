import * as React from "react";
import ChatBubble from "@cloudscape-design/chat-components/chat-bubble";
import Avatar from "@cloudscape-design/chat-components/avatar";
export default () => {
  return (
    <ChatBubble
      ariaLabel="John Doe at 5:29:02pm"
      type="outgoing"
      avatar={
        <Avatar ariaLabel="John Doe" tooltipText="John Doe" initials="JD" />
      }
    >
      {" "}
      What can I do with Amazon S3?{" "}
    </ChatBubble>
  );
};
