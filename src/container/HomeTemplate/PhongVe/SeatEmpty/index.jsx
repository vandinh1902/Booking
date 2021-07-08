import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const SeatEmpty = () => {
  const classes = useStyles();
  return (
    <Box className={classes.seat}>
      <Typography variant="caption" style={{ lineHeight: "80%" }}>
        &nbsp;&nbsp;
      </Typography>
    </Box>
  );
};

export default SeatEmpty;
