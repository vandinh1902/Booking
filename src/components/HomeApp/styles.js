import { makeStyles } from "@material-ui/core";
import backApp from "./../../assets/backapp.jpeg";

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    padding: "120px 0 80px 0",
    background: `url(${backApp})`,
    backgroundSize: "contain",
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "#FAFAFA",
  },

  root: {
    flexGrow: 1,
  },

  container: {
    maxWidth: "940px",
    margin: "0 auto",
  },

  right: {
    position: "relative",
    padding: "0",
  },

  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  phoneImg: {
    padding: "0 28%",
    width: "100%",
  },

  sliderScreen: {
    position: "absolute",
    padding: "1.5% 29.3% 0 29.3%",
    top: "0",
    left: "0",
    width: "100%",

    "& .slick-list": {
      borderRadius: "20px",
    },
  },

  img: {
    verticalAlign: "middle",
  },

  button: {
    backgroundColor: "plum",
    padding: "0.8rem 1rem",
    marginBottom: "0.5rem",
  },
}));
