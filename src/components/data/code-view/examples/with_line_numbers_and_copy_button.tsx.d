import * as React from "react";
import typescriptHighlight from "@cloudscape-design/code-view/highlight/typescript";
import CodeView from "@cloudscape-design/code-view/code-view";
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard";
export default () => {
  return (
    <CodeView
      content='const hello: string = "world";console.log(hello);'
      lineNumbers
      actions={
        <CopyToClipboard
          copyButtonAriaLabel="Copy code"
          copyErrorText="Code failed to copy"
          copySuccessText="Code copied"
          textToCopy='const hello: string = "world";console.log(hello);'
        />
      }
    />
  );
};
