import { makeStyles } from "@material-ui/core";
import background1 from "./../../assets/background1.jpeg";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  container: {
    maxWidth: "940px",
    margin: "0 auto",
    padding: "0.4rem 1rem 1.2rem 1rem",
    // background: "linear-gradient(-45deg,rgb(246 51 157),rgb(51 215 254))",
    backgroundColor: "#fff",
    borderRadius: "5px",
    // border: "5px solid rgb(246 51 157)",

    "& .MuiGrid-item": {
      padding: "0.25rem 0.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  bgColor: {
    padding: "1.5rem 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  item: {
    // borderRight: "1px solid #b5b5b5",
    position: "relative",
    padding: "0 2rem",

    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0%",
      right: "0%",
      // width: '100%',
      height: "2.5rem",
      width: "1px",
      display: "block",
      backgroundColor: "#f0f0f0",
    },
  },

  buttonWrapper: {
    position: "relative",
  },

  button: {
    position: "absolute",
    // width: "100%",
    top: "26%",
    left: "50%",
    transform: "translate(-50%, 0)",
    padding: "0.5rem 1.5rem",
    backgroundColor: "rgba(231,71,243, 0.9)",
    color: "#FAFAFA",
  },
}));
