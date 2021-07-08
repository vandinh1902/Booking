import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
  },

  bgNavTab: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    width: "250px",
    margin: "0 auto",
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  containerMobile: {
    margin: "0 1rem",
    paddingTop: "7rem",
  },

  wrapperItem: {
    position: "relative",
    // padding: "0.5rem 0",
    margin: "1rem -24px",
    // padding: "0 !important",
  },

  c18: {
    position: "absolute",
    bottom: "6%",
    left: "3%",
    color: "#FAFAFA",
    padding: "0 8px",
    backgroundColor: "#FB4226",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
  },

  danhGia: {
    position: "absolute",
    top: "6%",
    right: "3%",
    color: "#FAFAFA",
    padding: "0px 4px 4px 4px",
    backgroundColor: "rgba(12,27,54, 0.8)",
    border: "1px solid #1f2e46",
    borderRadius: "4px",
    fontSize: "18px",
    fontWeight: "500",
  },

  star: {
    fontSize: "12px",
    color: "plum",
    width: "12px",
  },

  img: {
    // paddingBottom: "150px",
    // backgroundSize: "100% 100%",
    height: "150px",
    objectFit: "cover",
    objectPosition: "50% 30%",
    borderRadius: "4px",
    // padding: "1rem 0",
  },

  title: {
    fontWeight: "500",
    color: "#FAFAFA",
    fontSize: "24px",
    textAlign: "center",
    margin: "0 0 2rem 0",
  },
}));
