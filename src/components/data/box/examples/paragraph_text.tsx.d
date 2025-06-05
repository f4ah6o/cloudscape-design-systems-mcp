import * as React from "react";
import Box from "@cloudscape-design/components/box";
export default () => {
  return (
    <Box variant="p">
      {" "}
      When you launch an instance, the instance class that you specify
      determines the hardware of the host computer used for your instance. Each
      instance class offers different compute, memory, and storage capabilities.
      Choose an instance class based on the requirements of the application or
      software that you plan to run on your instance.{" "}
    </Box>
  );
};
