import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    "& img": {
      borderRadius: "10px",
    },
  },

  wrapperText: {
    margin: "0.25rem 0.25rem",
  },

  mainText: {
    fontSize: "16px",
    fontWeight: "500",
  },

  subText: {
    fontSize: "14px",
    fontWeight: "400",
    marginTop: "0.5rem",
  },
  img: {
    width: "600px",
    height: "350px",
    borderRadius: "15px",
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "250px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "200px",
    },

    ["@media (max-width:400px)"]: {
      width: "200px",
      height: "170px",
    },
  },
  bgColor: {
    maxWidth: "100%",
    margin: "0 auto",
    top: "0%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  container: {
    margin: "0 auto",
    padding: "7rem 0 3rem 0",
    maxWidth: "1280px",
  },
  containerNews: {
    margin: "0 auto",
    padding: "3rem 0",
    maxWidth: "940px",
    color: "white",
    paddingBottom: "1rem",
    color: "rgb(223,66,238)",
  },

  titleNews: {
    display: "inline-block",
    backgroundColor: "#FFF",
    padding: "11px 25px",
    borderRadius: "10px",
    marginBottom: "1rem",
    fontWeight: "500",
  },
}));
