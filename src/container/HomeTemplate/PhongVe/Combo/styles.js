import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  combo: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "20rem",
    height: "100%",
    // boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    boxShadow: "-4px 2px 15px 0px rgb(0 0 0 / 30%)",

    overflowX: "scroll",
    transform: "translateX(0%)",
    transition: "all 1.5s ease",
    background: "white",
    zIndex: "-9999",
  },

  activeCombo: {
    transform: "translateX(-100%)",
    opacity: "1",
    zIndex: "0",
  },
}));
