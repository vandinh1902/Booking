import React, { useEffect, useRef } from "react";
import Carousel from "../../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie";
import SearchBarDesktop from "../../../components/SearchBarForDesktop/SearchBarDesktop";
import LichChieu from "./../LichChieu/TabParents";
import HomeApp from "../../../components/HomeApp";
import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";
import LazyLoad from "react-lazyload";
import { useMediaQuery } from "react-responsive";
import MovieHomeForPhone from "../../../components/MovieHomeForPhone";

const useStyles = makeStyles((theme) => ({
  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.8), rgba(231,71,243, 0.2)), url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
}));

const Home = () => {
  const classes = useStyles();
  const refApp = useRef(null);
  const movieList = useSelector((state) => state.MovieReducer.movieList);
  let arrRandom = [];
  for (let i = 0; i < 6; i++) {
    arrRandom.push(movieList[i]);
  }
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className={classes.bgColor} name="homeBlock">
      {!isMobile ? (
        <Carousel movieList={arrRandom} />
      ) : (
        <MovieHomeForPhone movieList={movieList} />
      )}
      <SearchBarDesktop />
      <Movie />
      <LichChieu />
      <LazyLoad offset={100}>
        <HomeApp />
      </LazyLoad>
    </div>
  );
};

export default React.memo(Home);
