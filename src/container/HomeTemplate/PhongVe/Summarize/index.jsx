import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Summarize = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{ maxWidth: "700px", margin: "1rem auto" }}>
        <Grid item xs={6} sm={3} md={3}>
          <Box className={classes.wrapperEach}>
            <Box className={classes.seat}>
              <Typography
                variant="caption"
                style={{
                  lineHeight: "80%",
                  color: "transparent",
                  fontSize: "10px",
                }}
              >
                &nbsp;
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Ghế thường</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Box className={classes.wrapperEach}>
            <Box className={classes.seatVip}>
              <Typography
                variant="caption"
                style={{
                  lineHeight: "80%",
                  color: "transparent",
                  fontSize: "10px",
                }}
              >
                &nbsp;
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Ghế VIP</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Box className={classes.wrapperEach}>
            <Box className={classes.bookingSeat}>
              <Typography
                variant="caption"
                style={{
                  lineHeight: "80%",
                  color: "transparent",
                  fontSize: "10px",
                }}
              >
                &nbsp;
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Ghế đang chọn</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Box className={classes.wrapperEach}>
            <Box className={classes.bookedSeat}>
              <Typography
                variant="caption"
                style={{
                  lineHeight: "80%",
                  color: "transparent",
                  fontSize: "10px",
                }}
              >
                &nbsp;
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">Ghế đã có người chọn</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summarize;
