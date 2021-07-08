import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem 1rem",
  },

  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    // background: `url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "3rem 0",
  },

  container: {
    maxWidth: "1080px",
    paddingTop: "2rem",
    margin: "0 auto",
    color: "#000",
  },

  borderTest: {
    backgroundColor: "#FAFAFA",
    padding: "1rem",
    borderRadius: "5px",
  },

  centerAll: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  nameUser: {
    fontWeight: "500",
    wordSpacing: "-1.5px",
    lineHeight: "90%",
  },
  editHoSo: {
    fontSize: "14px",
    cursor: "pointer",
  },

  boxContainerMenuItems: {},

  menuItems: {
    display: "flex",
    padding: "0.5rem 0",
    cursor: "pointer",
    alignItems: "center",
  },

  iconMenuItems: {
    // color: "#DF42EE",
  },

  menuItemsText: {
    marginLeft: "0.5rem",
    fontSize: "14px",
    fontWeight: "500",
  },

  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },

  nameAvatarBox: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "0.7rem",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
