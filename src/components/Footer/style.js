import { makeStyles } from "@material-ui/core";
import background1 from "./../../assets/background1.jpeg";
import footer_bg from "./../../assets/footer_bg.png";

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "3rem 0",
  },

  container: {
    maxWidth: "980px",
    margin: "0 auto",
    color: "#FAFAFA",

    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  title: {
    fontSize: "16px",
    padding: "0rem 0rem 1.5rem 0",
    color: "#DF42EE",

    [theme.breakpoints.down("sm")]: {
      padding: "0rem 0rem 0.5rem 0",
    },
  },

  subTitle: {
    "& p": {
      fontWeight: "lighter",
      fontSize: "14px",
      color: "#FAFAFA",
    },
  },

  footer_bg: {
    position: "relative",
    bottom: "0",
    background: `url(${footer_bg}) no-repeat scroll center 0`,
    width: "100%",
    height: "266px",
    overflowX: "hidden",
  },

  responsive: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      width: "100%",
      textAlign: "center",
    },
  },

  // footer_bg_one: {
  //   background: `url("https://1.bp.blogspot.com/-mvKUJFGEc-k/XclCOUSvCnI/AAAAAAAAUAE/jnBSf6Fe5_8tjjlKrunLBXwceSNvPcp3wCLcBGAsYHQ/s1600/volks.gif") no-repeat center center`,
  //   width: "330px",
  //   height: "105px",
  //   backgroundSize: "100%",
  //   position: "absolute",
  //   bottom: "0",
  //   left: "30%",
  //   animationName: "$myfirst",
  //   animationDuration: "22s",
  //   animationTimingFunction: "linear",
  //   animationIterationCount: "infinite",
  // },

  // footer_bg_two: {
  //   background: `url("https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif") no-repeat center center`,
  //   width: "88px",
  //   height: "100px",
  //   backgroundSize: "100%",
  //   position: "absolute",
  //   bottom: "0",
  //   left: "30%",
  //   animationName: "$myfirst",
  //   animationDuration: "30s",
  //   animationTimingFunction: "linear",
  //   animationIterationCount: "infinite",
  // },

  "@keyframes myfirst": {
    "0%": {
      left: "-25%",
    },
    "100%": {
      left: "100%",
    },
  },
}));
