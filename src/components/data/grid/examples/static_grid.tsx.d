import * as React from "react";
import Grid from "@cloudscape-design/components/grid";
export default () => {
  return (
    <Grid gridDefinition={[{ colspan: 2 }, { colspan: 10 }]}>
      {" "}
      <div>col-2</div> <div>col-10</div>{" "}
    </Grid>
  );
};
