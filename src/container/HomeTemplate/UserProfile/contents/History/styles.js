import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  borderTest: {
    backgroundColor: "#FAFAFA",
    padding: "1rem",
    borderRadius: "5px",
  },

  "& .MuiPaper-elevation1": {
    boxShadow: "none",
  },

  titleText: {
    fontWeight: "500",
    fontSize: "18px",
  },

  titleSpanText: {
    fontSize: "14px",
  },

  thead: {
    width: "100%",
    display: "table",
    backgroundColor: "plum",
    // [theme.breakpoints.down("xs")]: {
    //   width: "210%",
    //   display: "table",
    // },
  },

  tbody: {
    display: "table",
    width: "100%",
    textAlign: "center",
  },

  table: {
    width: "100%",
  },
}));
