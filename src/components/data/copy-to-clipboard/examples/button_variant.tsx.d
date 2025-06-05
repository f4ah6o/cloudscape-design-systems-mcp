import * as React from "react";
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard";
export default () => {
  return (
    <CopyToClipboard
      copyButtonText="Copy"
      copyErrorText="ARN failed to copy"
      copySuccessText="ARN copied"
      textToCopy="SLCCSMWOHOFUY0"
    />
  );
};
