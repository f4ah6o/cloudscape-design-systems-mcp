import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  return (
    <Flashbar
      items={[
        {
          type: "in-progress",
          content: (
            <ProgressBar
              label="Progress bar label"
              description="Progress bar description"
              value={37}
              additionalInfo="Additional information"
              variant="flash"
            />
          ),
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setItems([]),
          id: "message_1",
        },
      ]}
    />
  );
};
