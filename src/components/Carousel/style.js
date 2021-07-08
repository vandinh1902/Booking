import { makeStyles } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const useStyles = makeStyles((theme) => ({
  header: {
    // display: "none",
    opacity: "0%",
    maxWidth: "980px",
    margin: "0 auto",
    paddingTop: "4rem",
    fontFamily: "Montserrat, sans-serif",
  },

  logo: {
    fontSize: "3rem",
  },
  search: {
    position: "relative",
    borderRadius: "100px",
    border: "1px solid #A12ABD",
    color: "#FAFAFA",
    backgroundColor: "#3f105c",
    "&:hover": {
      backgroundColor: "transparent",
      transition: "all 0.25s",
    },
    marginTop: "1rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      cursor: "pointer",
      "&:focus": {
        width: "30ch",
        cursor: "auto",
      },
    },
  },

  bgColor: {
    maxWidth: "1280px",
    margin: "0 auto",
    top: "0%",
    width: "100%",
  },

  centerItem: {
    "& img": {
      transform: "scale(1.12)",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0px 0px 10px 1px rgba(236,70,248,0.61)",
    },
  },

  carousel: {
    width: "75%",
    maxWidth: "1280px",
    margin: "0rem auto",
    paddingTop: "8rem",

    "& img": {
      width: "275px",
      height: "375px",
      transition: "all 0.2s ease-in-out",
      borderRadius: "10px",

      ["@media (max-width:1279px)"]: {
        width: "240px",
        height: "340px",
      },

      ["@media (max-width:1110px)"]: {
        width: "220px",
        height: "320px",
      },

      ["@media (max-width:1025px)"]: {
        width: "295px",
        height: "395px",
      },

      ["@media (max-width:900px)"]: {
        width: "240px",
        height: "340px",
      },

      ["@media (max-width:750px)"]: {
        width: "210px",
        height: "310px",
      },

      ["@media (max-width:650px)"]: {
        width: "295px",
        height: "395px",
      },

      ["@media (max-width:470px)"]: {
        width: "250px",
        height: "330px",
      },

      ["@media (max-width:400px)"]: {
        width: "210px",
        height: "300px",
      },
    },
  },

  headerItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    color: "#A12ABD",
    fontSize: "10px !important",
    fontFamily: "Montserrat, sans-serif",
  },

  containerAll: {
    height: "450px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  containerImage: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      "& img": {
        transform: "scale(1.12)",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 0px 10px 1px rgba(236,70,248,0.61)",
      },
      "&:hover $stackContainer": {
        opacity: "1",
        backgroundColor: "rgba(236,70,248,0.9)",
        transform: "scale(1.12)",
        transition: "all 1s",
      },
    },
  },

  stackContainer: {
    position: "absolute",
    bottom: "-5%",
    left: "0%",
    backgroundColor: "transparent",
    width: "100%",
    margin: "initial",
    transition: "all 0.1s linear",
    borderRadius: "0 0 10px 10px",
    opacity: "0",
  },

  stackItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "#FAFAFA",
    fontSize: "10px !important",
  },

  prevArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "50%",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(-150%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  nextArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "50%",
    right: "0",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(150%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  hoverSVG: {
    "&:hover": {
      color: "#CCB3DB !important",
    },
  },

  dots: {
    bottom: "-2%",
    transition: "all 0.3s",
    "& li.slick-active button::before": {
      color: "#FFFFFF",
      transform: "scale(1.2)",
      transition: "all 0.3s",
    },
    "& li": {
      "&:hover": {
        "&:hover": {
          transform: "scale(1.2)",
          transition: "all 0.3s",
        },
      },
      "& button::before": {
        fontSize: theme.typography.pxToRem(11),
        color: "#9A61B8",
        opacity: 0.5,
      },
    },
  },
}));
