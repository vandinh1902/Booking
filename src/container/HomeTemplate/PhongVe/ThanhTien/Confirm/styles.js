import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contents: {
    padding: "0.5rem",
  },
  name: {
    display: "inline-block",
    color: "rgb(236,70,248)",
    fontWeight: "700",
  },
  items: {
    borderBottom: "1px solid #E9E9E9",
    padding: "0.7rem 0",
  },

  itemsTextField: {
    borderBottom: "1px solid #E9E9E9",
    padding: "0.2rem 0",
  },
  total: {
    color: "rgb(236,70,248)",
    fontSize: "34px",
    textAlign: "center",
  },
  button: {
    paddingTop: "15px",
    height: "60px",
    cursor: "pointer",
    fontSize: "24px",
    textAlign: "center",
    color: "#fff!important",
    width: "100%",
    // backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
    backgroundColor: "rgb(0,0,0)",
    borderRadius: "0px",
  },
  notice: {
    marginTop: "1rem",
    marginBottom: "1rem",
    marginRight: "4px",
    background: "#fff",
    textAlign: "center",
  },

  noticeText: {
    fontSize: "14px",
  },

  movieTitle: {
    fontSize: "16px",
    fontWeight: "500",
  },
  movieText: {
    fontSize: "14px",
  },

  titleSpan: {
    fontSize: "14px",
    fontWeight: "500",
    paddingBottom: "0.5rem",
  },

  pleased: {
    marginTop: "0rem",
    fontSize: "14px",
    color: "rgb(236,70,248)",
  },

  soGhe: {
    fontSize: "14px",
    color: "rgb(236,70,248)",
  },
}));
