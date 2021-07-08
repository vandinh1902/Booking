import { makeStyles } from "@material-ui/core";
import top from "./../../../assets/veXemPhim.png";
import bottom from "./../../../assets/veXemPhimBottom.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  datVeLai: {
    marginTop: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.25rem 1rem",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    padding: "5rem 0 1rem 0",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  titleTheater: {
    color: "green",
  },

  titleTheaterSpan: {
    color: "#9B9B9B",
    fontSize: "16px",
    fontWeight: "500",
  },

  countDown: {
    fontSize: "2rem",
    color: "rgb(236,70,248)",
    lineHeight: "95%",
  },
  formatTop: {
    width: "100%",
    background: `url(${top}) repeat-x top left transparent`,
    height: "8px",
    overflow: "hidden",
  },

  bgThanhToan: {
    backgroundColor: "#000",
    maxWidth: "760px",
    margin: "0 auto",
    color: "#FAFAFA",
    // marginTop: "30px",
  },

  containerThanhToan: {},

  formatBottom: {
    width: "100%",
    background: `url(${bottom}) repeat-x bottom left transparent`,
    height: "8px",
    overflow: "hidden",
  },

  overflow: {
    width: "760px",
    overflowY: "hidden",
    overflowX: "auto",
  },

  renderSeatWrapper: {
    width: "680px",
    margin: "0 auto",
    // overflowY: "hidden",
    // overflowX: "auto",
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

  haiCham: {
    transform: "scale(0.5) scaleX(2) scaleY(2) translate(0, -10%)",
    fontSize: "2rem",
    lineHeight: "80%",
  },
}));
