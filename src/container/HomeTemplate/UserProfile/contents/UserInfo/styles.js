import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  borderTest: {
    backgroundColor: "#FAFAFA",
    padding: "1rem",
    borderRadius: "5px",
  },

  centerAll: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },

  titleText: {
    fontWeight: "500",
    fontSize: "18px",
  },

  titleSpanText: {
    fontSize: "14px",
  },

  textFieldMain: {
    color: "rgba(85,85,85,.8)",
    fontSize: "14px",

    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },

  inputContainer: {
    marginBottom: "0.2rem",
  },

  buttonSubmit: {},
}));
