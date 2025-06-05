import * as React from "react";
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard";
export default () => {
  return (
    <CopyToClipboard
      copyButtonAriaLabel="Copy ARN"
      copyErrorText="ARN failed to copy"
      copySuccessText="ARN copied"
      textToCopy="SLCCSMWOHOFUY0"
      variant="inline"
    />
  );
};
