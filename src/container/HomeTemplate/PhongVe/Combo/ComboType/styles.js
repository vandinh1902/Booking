import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  wrapperNameCombo: {
    marginLeft: "0.5rem",
  },

  comboTitle: {
    fontWeight: "500",
    fontSize: "16px",
  },

  comboPrice: {
    fontSize: "16px",
    color: "plum",
  },
  minus: {
    marginRight: "5px",
    background: "0 0",
    border: "transparent",
    color: "#9b9b9b!important",
    transform: "scale(2)",
    transform: "scaleY(3) scaleX(3)",
    fontSize: "16px",
  },
  add: {
    marginRight: "5px",
    background: "0 0",
    border: "transparent",
    color: "#9b9b9b!important",
    transform: "scale(2)",
    fontSize: "16px",
  },

  quantity: {
    padding: "0.15rem 0.5rem",
    border: "1px solid #9b9b9b",
    margin: "0 0.5rem",
    borderRadius: "4px",
  },

  span: {
    fontSize: "12px",
  },
}));
