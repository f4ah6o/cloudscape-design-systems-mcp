import * as React from "react";
import typescriptHighlight from "@cloudscape-design/code-view/highlight/typescript";
import CodeView from "@cloudscape-design/code-view/code-view";
export default () => {
  return (
    <CodeView content='const hello: string = "world";console.log(hello);' />
  );
};
