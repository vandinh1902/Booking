import { makeStyles } from "@material-ui/core";
import top from "../../../../assets/veXemPhim.png";
import bottom from "../../../../assets/veXemPhimBottom.png";
import background1 from "../../../../assets/background1.jpeg";

export const useStyles = makeStyles((theme) => ({
  formatTop: {
    width: "100%",
    background: `url(${top}) repeat-x top left transparent`,
    height: "8px",
    overflow: "hidden",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "50%",
    height: "75%",
    padding: "1rem",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: "70%",
    },
  },

  bgThanhToan: {
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.8), rgba(231,71,243, 0.2)), url(${background1})`,
    width: "100%",
    margin: "0 auto",
    color: "#FAFAFA",
  },

  main: {
    fontWeight: "400",
    color: "#CCCCCC",
  },

  name: {
    display: "inline-block",
    color: "#FAFAFA",
    fontWeight: "700",
  },

  containerThanhToan: {},

  formatBottom: {
    width: "100%",
    background: `url(${bottom}) repeat-x bottom left transparent`,
    height: "8px",
    overflow: "hidden",
  },
}));
