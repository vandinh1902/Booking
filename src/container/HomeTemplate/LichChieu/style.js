import { makeStyles } from "@material-ui/core/styles";
import background1 from "./../../../assets/background1.jpeg";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent !important",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    padding: "0.5rem 0",

    "& .MuiTabs-indicator": {
      backgroundColor: "transparent !important",
    },

    "& .MuiBox-root": {
      padding: "0rem",
      maxHeight: "500px",
      // overflow: "scroll",
    },
    "& .MuiTab-root": {
      minWidth: "100px",
    },
    "& .MuiTab-textColorInherit": {
      position: "relative",
      // padding: "0.3rem 0",
      opacity: "1",
      "&:before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "10%",
        width: "80%",
        height: "1px",
        display: "block",
        background: "#F0F0F0",
      },
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  bgColor: {
    paddingBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    backgroundColor: "#FAFAFA",
    maxWidth: "940px",
    margin: "0 auto",
    borderRadius: "4px",
  },
}));
