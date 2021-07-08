import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  item: {
    transform: "scaleX(0.95)",
    cursor: "pointer",
    margin: "1rem 0 4rem 0",
    overflow: "hidden",
    borderRadius: "4px",

    "&:hover $titleContainer": {
      opacity: "0",
      transition: "all 0.3s ease-in-out",
      visibility: "hidden",
    },

    "&:hover $description": {
      opacity: "0",
      transition: "all 0.3s ease-in-out",
      visibility: "hidden",
    },

    "&:hover $buyTicketButton": {
      opacity: "100%",
      transition: "all 0.3s ease-in-out",
    },

    "&:hover $overlay": {
      background: "linear-gradient(to top,#000,transparent 150%)",
      transition: "all 0.3s ease-in-out",
    },
  },

  poster: {
    position: "relative",
    borderRadius: "4px",

    "& img": {
      transition: "all 0.3s ease-in-out",
    },

    "&:hover img": {
      transform: "scale(1.3)",
      transition: "all 0.3s ease-in-out",
    },
  },

  overlay: {
    // display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top,#000,transparent 80%)",
    borderRadius: "4px",
    zIndex: "0",
    transition: "all 0.3s ease-in-out",
  },

  titleContainer: {
    position: "absolute",
    bottom: "15%",
    left: "5%",
    zIndex: "1",
    transition: "all 0.3s linear",
  },

  title: {
    fontWeight: "500",
    fontSize: "18px",
    color: "#FAFAFA",
    letterSpacing: "1px",
  },

  spacingSpan: {
    margin: "0 5px",
    transition: "all 0.3s linear",
  },

  buyTicketContainer: {
    position: "absolute",
    // opacity: "0",
    // display: "none",
    bottom: "50%",
    left: "50%",
    zIndex: "1",
    transform: "translate(-50%, 50%)",
  },

  buyTicketButton: {
    backgroundColor: "transparent",
    opacity: "0",
    color: "#FAFAFA",
    border: "2.5px solid plum",
    transition: "all 0.3s linear",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(0.9)",
      transition: "all 0.3s linear",
    },
  },

  description: {
    position: "absolute",
    bottom: "1%",
    left: "5%",
    zIndex: "1",
    transition: "all 0.3s linear",
  },
}));
