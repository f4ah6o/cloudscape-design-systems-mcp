import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid
      gridDefinition={[
        { colspan: { default: 3, xxs: 9 } },
        { colspan: { default: 9, xxs: 3 } },
      ]}
    >
      {" "}
      <div>default-3 xxs-9</div> <div>default-9 xxs-3</div>{" "}
    </Grid>
  );
};
