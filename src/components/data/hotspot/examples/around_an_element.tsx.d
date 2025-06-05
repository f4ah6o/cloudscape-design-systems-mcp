import * as React from "react";
import Hotspot from "@cloudscape-design/components/hotspot";
import Input from "@cloudscape-design/components/input";
export default () => {
  return (
    <Hotspot direction="bottom" hotspotId="bucket-name">
      {" "}
      <Input />{" "}
    </Hotspot>
  );
};
