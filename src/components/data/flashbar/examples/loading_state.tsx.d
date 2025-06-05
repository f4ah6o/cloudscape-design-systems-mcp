import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  return (
    <Flashbar
      items={[
        {
          type: "success",
          loading: true,
          content: "This is an in progress flash message.",
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setItems([]),
          id: "message_1",
        },
      ]}
    />
  );
};
