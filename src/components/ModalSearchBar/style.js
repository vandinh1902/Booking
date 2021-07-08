import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-outlined": {
      color: "violet",
    },
    "& .MuiFormControl-root": {
      backgroundColor: "rgb(49,49,49)",
      borderRadius: "50px",
    },
  },

  inputRoot: {
    color: "#FAFAFA !important",

    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "50px",
      border: "1px solid rgba(37,36,39,1)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
  },

  gridItems: {
    marginBottom: "0.5rem",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "rgba(37,36,39,0.95)",
    color: "#FAFAFA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
  },
  searchContainer: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    lineHeight: "50px",
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.9), rgba(231,71,243, 0.9))`,
    webkitBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    mozBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    boxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
  },

  container: {
    // marginTop: "5rem",
    maxWidth: "45%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "60%",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  buttonBuyTicket: {
    marginTop: "1.5rem",
    backgroundColor: "rgba(138,52,144, 1)",
    padding: "5px 28px",
    borderRadius: "100px",
    border: "2.5px solid rgb(236,70,248)",
    "&:hover": {
      backgroundColor: "rgba(138,52,144, 0.7)",
      border: "2.5px solid rgba(236,70,248, 0.7)",
    },
  },
  iconClose: {
    position: "absolute",
    top: "1%",
    right: "3%",
    fontSize: "2.5rem",
    cursor: "pointer",
  },

  sweetAlert: {
    zIndex: "100000 !important",
  },
}));
