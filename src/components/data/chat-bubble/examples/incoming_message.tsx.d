import * as React from "react";
import ChatBubble from "@cloudscape-design/chat-components/chat-bubble";
import ButtonGroup from "@cloudscape-design/components/button-group";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Avatar from "@cloudscape-design/chat-components/avatar";
export default () => {
  return (
    <ChatBubble
      ariaLabel="Generative AI assistant at 6:35:10pm"
      type="incoming"
      actions={
        <ButtonGroup
          ariaLabel="Chat bubble actions"
          variant="icon"
          items={[
            {
              type: "group",
              text: "Feedback",
              items: [
                {
                  type: "icon-button",
                  id: "helpful",
                  iconName: "thumbs-up-filled",
                  text: "Helpful.",
                  disabled: true,
                  disabledReason: "“Helpful” feedback has been submitted.",
                },
                {
                  type: "icon-button",
                  id: "not-helpful",
                  iconName: "thumbs-down",
                  text: "Not helpful",
                  disabled: true,
                  disabledReason:
                    "“Not helpful” option is unavailable after “helpful” feedback submitted.",
                },
              ],
            },
            {
              type: "icon-button",
              id: "copy",
              iconName: "copy",
              text: "Copy",
              popoverFeedback: (
                <StatusIndicator type="success">
                  {" "}
                  Message copied{" "}
                </StatusIndicator>
              ),
            },
          ]}
        />
      }
      avatar={
        <Avatar
          color="gen-ai"
          iconName="gen-ai"
          ariaLabel="Generative AI assistant"
          tooltipText="Generative AI assistant"
        />
      }
    >
      {" "}
      Amazon S3 is built using AWS's highly available and reliable
      infrastructure. Our distributed DNS servers ensure that you can
      consistently route your end users to your application.{" "}
    </ChatBubble>
  );
};
