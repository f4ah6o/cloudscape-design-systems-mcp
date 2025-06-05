import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid
      disableGutters
      gridDefinition={[
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
      ]}
    >
      {" "}
      <div>col-4</div> <div>col-4</div> <div>col-4</div> <div>col-4</div>{" "}
      <div>col-4</div> <div>col-4</div>{" "}
    </Grid>
  );
};
