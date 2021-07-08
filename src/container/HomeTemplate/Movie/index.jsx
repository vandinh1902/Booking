import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./style";
import poster1 from "./../../../assets/money-heist.jpg";
import poster2 from "./../../../assets/the100.jpg";
import poster3 from "./../../../assets/tenet.jpg";
import poster4 from "./../../../assets/inception.jpg";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "./style.css";
import MovieItem from "../../../components/MovieItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Movie = () => {
  const classes = useStyle();
  const ref = useRef({});
  const [value, setValue] = React.useState(0);
  const movieList = useSelector((state) => state.MovieReducer.movieList);

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

  const sliceMovieList1 = [...movieList].slice(0, 15).reverse();
  const sliceMovieList2 = [...movieList].slice(16, 31);
  const sliceMovieList3 = [...movieList].slice(32, movieList.length).reverse();

  const renderMovieList3 = () => {
    return sliceMovieList3.map((movie, index) => {
      return <MovieItem movie={movie} key={index} />;
    });
  };

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    dots: false,
    infinite: false,

    speed: 500,
    slidesToScroll: 3,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    rows: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          infinite: false,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          infinite: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.root} name="phimBlock">
      <Box className={classes.bgColor}>
        <Box className={classes.container}>
          <Box className={classes.titleContainer} display="flex">
            <div className={classes.titleColor}></div>
            <Typography
              style={{ fontWeight: "500", fontSize: "20px", color: "#FAFAFA" }}
            >
              Phim cháy vé
            </Typography>
          </Box>
          <Slider {...settings} ref={ref}>
            {renderMovieList3()}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default Movie;
