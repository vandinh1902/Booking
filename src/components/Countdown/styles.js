import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "1.5rem 1rem",
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  titleTheaterSpan: {
    color: "plum",
    fontSize: "16px",
    fontWeight: "500",
  },

  countDownWrapper: {
    backgroundColor: "#000",
    padding: "10px",
    borderRadius: "5px",
    margin: "0.5rem",
  },

  countDown: {
    fontSize: "16px",
    color: "white",
    lineHeight: "100%",
  },
  datVeLai: {
    marginTop: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.25rem 1rem",
  },
  haiCham: {
    transform: "scale(0.5) scaleX(2) scaleY(2) translate(0, -10%)",
    fontSize: "2rem",
    lineHeight: "80%",
  },
}));
