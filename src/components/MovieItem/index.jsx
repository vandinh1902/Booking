import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GradeIcon from "@material-ui/icons/Grade";

const MovieItem = ({ movie }) => {
  const { hinhAnh, biDanh, tenPhim, maPhim, danhGia } = movie;
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <Box className={classes.poster}>
        <img
          src={hinhAnh}
          alt={biDanh}
          width="100%"
          height="275px"
          style={{ borderRadius: "4px" }}
        />
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>{tenPhim}</Typography>
        </Box>

        <Box display="flex" className={classes.description}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.spacingSpan}
          >
            <GradeIcon style={{ fontSize: "12px", color: "plum" }} />
            <Typography style={{ fontSize: "14px" }}>{danhGia}</Typography>
          </Box>
          <Box className={classes.spacingSpan}>
            <Typography style={{ fontSize: "14px" }}>HD</Typography>
          </Box>
          <Box className={classes.spacingSpan}>
            <Typography style={{ fontSize: "14px" }}>16+</Typography>
          </Box>
        </Box>

        <Box className={classes.buyTicketContainer}>
          <Link
            to={`/movie/${movie?.biDanh}-${movie?.maPhim}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" className={classes.buyTicketButton}>
              MUA VÉ
            </Button>
          </Link>
        </Box>
        <div className={classes.overlay}></div>
      </Box>
    </div>
  );
};

export default MovieItem;
