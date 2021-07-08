import { makeStyles } from "@material-ui/core";
import bgImage from "./../../../assets/money-heist.jpg";
import background1 from "./../../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& label.Mui-focused": {
      color: "transparent",
    },
    "& label": {
      color: "transparent",
    },
    "& .MuiInputLabel-outlined": {
      color: "violet",
      // color: "transparent",
    },
    "& .MuiFormControl-root": {
      backgroundColor: "#FAFAFA",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      border: "transparent",
    },
  },

  rootStar: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
    "& label": {
      display: "initial",
    },

    "& .MuiRating-root": {
      color: "rgba(236,70,248,1)",
    },
  },

  inputRoot: {
    color: "#5A5A5A !important",
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    padding: theme.spacing(1),
    textAlign: "center",
    // backgroundColor: "rgba(37,36,39,0.4)",
    color: "#FAFAFA",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(3, 3, 3),
    width: "75%",
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  exitIcon: {
    position: "absolute",
    top: "0%",
    right: "0%",
    transform: "translate(20%, -20%)",
    cursor: "pointer",
  },

  containerImage: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(236,70,248,0.9)",

    "& img": {
      transition: "all 0.2s ease-in-out",
    },

    "&:hover": {
      "& img": {
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 0px 10px 1px rgba(236,70,248,0.61)",
      },
    },
  },

  stackContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    backgroundColor: "rgba(236,70,248,0.9)",
    transition: "all 1s linear",
    width: "100%",
    margin: "initial",
    borderRadius: "0 0 10px 10px",
  },

  stackItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "#FAFAFA",
    fontSize: "10px !important",
  },

  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   zIndex: "1",
  // },

  bgColor: {
    maxWidth: "100%",
    top: "0%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },

  containerForMovie: {
    maxWidth: "1280px",
    margin: "0 auto",
    paddingTop: "7rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  containerForTabs: {
    maxWidth: "1280px",
    margin: "0 auto",
  },

  container: {
    maxWidth: "870px",
    margin: "0 auto",
    paddingTop: "1rem",
    color: "#FAFAFA",
  },

  realContainer: {
    margin: "0 1rem",
  },

  containerForComment: {
    maxWidth: "550px",
    margin: "0 auto",
    color: "#FAFAFA",
  },

  userComment: {
    backgroundColor: "#90909087",
    padding: "1rem 1rem",
    borderRadius: "10px",
  },

  otherUsersComment: {
    backgroundColor: "#FAFAFA",
    color: "#5A5A5A",
    padding: "1rem 1rem",
    borderRadius: "10px",
    color: "",
  },

  scoreOtherUsers: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  imgAvatar: {
    borderRadius: "50%",
    margin: "1rem 0rem 0rem 0.5rem",

    [theme.breakpoints.down("xs")]: {
      width: "45px",
      height: "45px",
    },
  },

  imgAvatarOtherUsers: {
    borderRadius: "50%",
    margin: "0rem 0rem 0rem 0.5rem",
    [theme.breakpoints.down("xs")]: {
      width: "45px",
      height: "45px",
    },
  },

  // backIcon: {
  //   position: "absolute",
  //   top: "30px",
  //   left: "50px",
  //   color: "rgba(236,70,248,1)",
  //   fontSize: "2.5rem",
  //   transition: "all 0.2s",
  //   "&:hover": {
  //     color: "rgba(165, 47, 173)",
  //     transform: "scale(0.9)",
  //   },
  // },

  describeTitle: {
    flexDirection: "column",
    // justifyContent: "center",
    height: "100%",
  },

  bgNavTab: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },

  tabs: {
    maxWidth: "870px",
    margin: "0 auto",
    marginTop: "3rem",
    color: "#FAFAFA",

    "& .MuiBox-root-169": {
      padding: "5px",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5rem",
    },
  },

  mainTitle: {
    fontSize: "30px",
    color: "#e88ef0",
    fontWeight: "400",
  },

  fontForProduction: {
    fontWeight: "500",
    margin: "0.2rem 0",
  },

  reviewContainer: {
    backgroundColor: "rgba(256,256,256, 0.35)",
    borderRadius: "10px",
    "& *": {
      margin: "0 0.8rem",
    },
  },
  buttonBuyTicket: {
    marginTop: "1rem",
    backgroundColor: "rgba(138,52,144, 1)",
    padding: "5px 28px",
    borderRadius: "100px",
    border: "2.5px solid rgb(236,70,248)",
    "&:hover": {
      backgroundColor: "rgba(138,52,144, 0.7)",
      border: "2.5px solid rgba(236,70,248, 0.7)",
    },
  },

  hideOnMobileScore: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  forMobile: {
    display: "none",
    paddingTop: "3.9rem",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  containerImageMobile: {
    position: "relative",
    "& > img": {
      maxHeight: "200px",
      objectFit: "contain",
    },
  },

  overlay: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgb(0, 0, 0), transparent 100%)",
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  ngayKhoiChieuMobile: {
    color: "#9B9B9B",
    fontSize: "15px",
  },
  titleMobile: {
    fontSize: "18px",
    fontWeight: "500",
  },
  subMobile: {
    color: "#9B9B9B",
    fontSize: "15px",
  },
}));
