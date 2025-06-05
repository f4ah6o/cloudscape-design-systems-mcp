import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid
      gridDefinition={[
        { colspan: 9, push: { xxs: 3 } },
        { colspan: 3, pull: { xxs: 9 } },
      ]}
    >
      {" "}
      <div>col-4 push-xxs-3</div> <div>col-4 pull-xxs-9</div>{" "}
    </Grid>
  );
};
