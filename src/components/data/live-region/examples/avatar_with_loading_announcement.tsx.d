import * as React from "react";
import LiveRegion from "@cloudscape-design/components/live-region";
import Avatar from "@cloudscape-design/chat-components/avatar";
export default () => {
  return (
    <div>
      {" "}
      <Avatar
        ariaLabel="Avatar of generative AI assistant"
        color="gen-ai"
        iconName="gen-ai"
        loading={true}
        tooltipText="Generative AI assistant"
      />{" "}
      <LiveRegion hidden>Generating response</LiveRegion>{" "}
    </div>
  );
};
