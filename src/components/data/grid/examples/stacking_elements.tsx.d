import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid
      gridDefinition={[
        { colspan: { default: 12, xxs: 6 } },
        { colspan: { default: 12, xxs: 6 } },
      ]}
    >
      {" "}
      <div>default-12 xxs-6</div> <div>default-12 xxs-6</div>{" "}
    </Grid>
  );
};
