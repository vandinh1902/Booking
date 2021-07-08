import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width: "60%",
    maxHeight: "60%",
    overflowY: "scroll",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  table: {
    width: "100%",
  },
}));
