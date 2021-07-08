import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "inline-block",
    // cursor: "pointer",
  },
  seat: {
    borderRadius: "5px",
    backgroundColor: "rgba(62,81, 93)",
    display: "inline-block",
    padding: "0rem 0.3rem",
    position: "relative",
    margin: "0.5rem 0.65rem",
    maxHeight: "1.25rem",
    cursor: "pointer",
    "&:before": {
      content: `"\u00a0\u00a0"`,
      position: "absolute",
      borderRadius: "4px 4px 10px 10px",
      bottom: "-80%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "1.3rem",
      padding: "0rem 0.8rem",
      backgroundColor: "#fff",
      width: "100%",
      borderLeft: "4px solid rgba(62,81, 93)",
      borderRight: "4px solid rgba(62,81, 93)",
      borderBottom: "4px solid rgba(62,81, 93)",
      zIndex: "-1",
    },
  },

  vipSeat: {
    backgroundColor: "rgb(247, 181, 0)",
    cursor: "pointer",

    "&:before": {
      content: `"\u00a0\u00a0"`,
      borderLeft: "4px solid rgb(247, 181, 0)",
      borderRight: "4px solid rgb(247, 181, 0)",
      borderBottom: "4px solid rgb(247, 181, 0)",
      cursor: "pointer",
    },
  },

  selected: {
    backgroundColor: "rgb(68, 192, 32)",
    cursor: "pointer",

    "&:before": {
      content: `"\u00a0\u00a0"`,
      borderLeft: "4px solid rgb(68, 192, 32)",
      borderRight: "4px solid rgb(68, 192, 32)",
      borderBottom: "4px solid rgb(68, 192, 32)",
      cursor: "pointer",
    },
  },

  booked: {
    backgroundColor: "rgb(236, 238, 240)",
    cursor: "not-allowed",

    "&:before": {
      content: `"\u00a0\u00a0"`,
      borderLeft: "4px solid rgb(236, 238, 240)",
      borderRight: "4px solid rgb(236, 238, 240)",
      borderBottom: "4px solid rgb(236, 238, 240)",
      cursor: "not-allowed",
    },
  },
}));
