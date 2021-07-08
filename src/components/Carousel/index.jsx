import React, { useRef, useState } from "react";
import { useStyles } from "./style";
import Slider from "react-slick";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ModalTrailer from "./ModalTrailer";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Carousel = ({ movieList }) => {
  const classes = useStyles();
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const ArrowLeft = (props) => (
    <div className={`${classes.prevArrow}`} onClick={previous}>
      <ArrowBackIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );
  const ArrowRight = (props) => (
    <div className={`${classes.nextArrow}`} onClick={next}>
      <ArrowForwardIosIcon
        style={{ color: "#544874", transform: "scale(1.5)" }}
        className={classes.hoverSVG}
      />
    </div>
  );

  const settings = {
    infinite: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    dots: false,
    dotsClass: `slick-dots ${classes.dots}`,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderMovieList = () => {
    return movieList.map((movie) => {
      return (
        <div key={uuidv4()}>
          <div className={classes.containerAll}>
            <div className={classes.containerImage}>
              <img src={movie?.hinhAnh} />
              <Grid container spacing={3} className={classes.stackContainer}>
                <Grid item xs={6} className={classes.stackItem}>
                  <ModalTrailer trailer={movie?.trailer} />
                </Grid>

                <Grid item xs={6} className={classes.stackItem}>
                  <Link
                    to={`/movie/${movie?.biDanh}-${movie?.maPhim}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <ErrorOutlineIcon style={{ color: "#FAFAFA" }} />
                      <Typography
                        component="p"
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                          marginTop: "5px",
                          color: "#FAFAFA",
                        }}
                      >
                        Chi tiết
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.bgColor}`}>
        <Box className={classes.carousel}>
          <Slider ref={ref} {...settings}>
            {renderMovieList()}
          </Slider>
        </Box>
      </div>
    </div>
  );
};

export default Carousel;
