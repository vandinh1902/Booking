import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  seat: {
    borderRadius: "5px",
    backgroundColor: "#fff",
    display: "inline-block",
    padding: "0rem 0.3rem",
    position: "relative",
    margin: "0.5rem 0.65rem",
    "&:before": {
      content: `"\u00a0\u00a0"`,
      position: "absolute",
      borderRadius: "4px 4px 10px 10px",
      bottom: "-85%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "0rem 0.88rem",
      backgroundColor: "#fff",
      width: "100%",
      //   borderLeft: "4px solid pink",
      //   borderRight: "4px solid pink",
      //   borderBottom: "4px solid pink",
      zIndex: "-1",
    },
  },
}));
