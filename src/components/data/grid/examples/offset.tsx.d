import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid
      gridDefinition={[
        { colspan: 4, offset: { xxs: 2 } },
        { colspan: 4, offset: { xxs: 2, default: 4 } },
      ]}
    >
      {" "}
      <div>col-4 offset-xxs-2</div>{" "}
      <div>col-4 offset-xxs-2 offset-default-4</div>{" "}
    </Grid>
  );
};
