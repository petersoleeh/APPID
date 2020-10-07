import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const ObservationItem = ({ bees }) => {
  console.log(bees);
  return (
    <Grid item xs={12}>
      <Paper elevation={6} style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={bees.media[0].identifier}/> */}
  <Typography variant="subtitle1">{bees.decimalLatitude}{bees.recordedBy}</Typography>
      </Paper>
    </Grid>
  );
};

export default ObservationItem;
