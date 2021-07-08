import { makeStyles } from "@material-ui/core";
import backgroundSignInUp from "./../../../assets/backgroundSignInUp.jpeg";

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    padding: "4.5rem 0",
    background: `url(${backgroundSignInUp})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100%",
  },

  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
  },
  margin: {
    margin: theme.spacing(1),
  },
  link: {
    color: "#000",
    listStyle: "none",
  },
  line: {
    width: "100%",
    backgroundColor: "#D1D7DC",
    height: "1px",
    position: "absolute",
    top: "50%",
    left: "0%",
  },
  goBackContainer: {
    display: "flex",
    paddingTop: "1rem",
  },

  closeIcon: {
    // position: "absolute",
    // top: "1%",
    // left: "2%",
    fontSize: "1.5rem",
  },
}));
