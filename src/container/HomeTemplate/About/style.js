import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent !important",
    display: "flex",
    height: "100%",
    color: "#FAFAFA",

    "& .MuiBox-root": {
      padding: "0rem 1rem",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    "& .MuiTab-wrapper": {
      alignItems: "flex-start",
    },
  },

  bgColor: {
    maxWidth: "1280px",
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
    padding: "2rem 0 2rem 0",
    maxWidth: "970px",
    minHeight: "100%",
  },

  wrappedPanel: {
    maxWidth: "700px",
  },

  bgTabs: {
    backgroundColor: "transparent !important",
  },
}));
