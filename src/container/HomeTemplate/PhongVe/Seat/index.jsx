import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { BOOKING_SEAT } from "../modules/redux/constants";

const Seat = ({ gheInfo }) => {
  const classes = useStyles();
  const { loaiGhe, daDat: booked } = gheInfo;
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const handleBookingSeat = () => {
    dispatch({
      type: BOOKING_SEAT,
      payload: gheInfo,
    });
  };
  return (
    <div
      className={classes.wrapper}
      onClick={() => {
        handleBookingSeat();
        setSelected(!selected);
      }}
    >
      <Box
        className={`${classes.seat} ${
          loaiGhe === "Vip" ? classes.vipSeat : ""
        } ${selected ? classes.selected : ""} ${booked ? classes.booked : ""}`}
      >
        <Typography
          variant="caption"
          style={{ lineHeight: "80%", color: "transparent", fontSize: "10px" }}
        >
          00
        </Typography>
      </Box>
    </div>
  );
};

export default Seat;
