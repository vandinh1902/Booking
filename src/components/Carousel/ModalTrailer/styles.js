import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999 !important",
  },
  paper: {
    position: "relative",
    // padding: theme.spacing(1),
    textAlign: "center",
    // backgroundColor: "rgba(37,36,39,0.4)",
    color: "#FAFAFA",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(3, 3, 3),
    width: "75%",
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  exitIcon: {
    position: "absolute",
    top: "0%",
    right: "0%",
    cursor: "pointer",
  },
}));
