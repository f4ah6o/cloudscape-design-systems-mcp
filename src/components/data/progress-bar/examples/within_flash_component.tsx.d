import * as React from "react";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  return (
    <Flashbar
      items={[
        {
          content: (
            <ProgressBar
              value={36}
              variant="flash"
              additionalInfo="Additional information"
              description="Progress bar description"
              label="Progress bar label"
            />
          ),
          type: "in-progress",
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setItems([]),
          id: "progressbar_1",
        },
      ]}
    />
  );
};
