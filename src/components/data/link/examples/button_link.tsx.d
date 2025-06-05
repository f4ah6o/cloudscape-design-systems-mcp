import * as React from "react";
import Link from "@cloudscape-design/components/link";
export default () => {
  return (
    <Link onFollow={() => alert("You clicked the button link!")}>
      {" "}
      Perform action{" "}
    </Link>
  );
};
