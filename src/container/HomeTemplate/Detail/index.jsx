import {
  AppBar,
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyle } from "./style";
import poster1 from "./../../../assets/the100.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import "./style.css";
import "./../../../components/CirclePercents/css/circle.css";
import GradeIcon from "@material-ui/icons/Grade";
import SendIcon from "@material-ui/icons/Send";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";
import SubjectIcon from "@material-ui/icons/Subject";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import {
  FETCH_THONG_TIN_PHIM_CLEAN_UP,
  FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
  FETCH_USERS_COMMENT_REQUESTS_SAGA,
  POST_USERS_COMMENT_REQUESTS_SAGA,
} from "./modules/redux/constants";
import TabContainer from "../../../components/LichChieuDetail/TabContainer";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Fade from "@material-ui/core/Fade";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Rating from "@material-ui/lab/Rating";
import Swal from "sweetalert2";
import avatarDefault from "./../../../assets/avatar-none.jpeg";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Detail = (props) => {
  const classes = useStyle();
  const movieDetail = useSelector(
    (state) => state.MovieDetailReducer.movieDetail
  );
  const comments = useSelector((state) => state.MovieDetailReducer.comments);
  const totalComment = useSelector(
    (state) => state.MovieDetailReducer.tongComment
  );
  const [comment, setComment] = useState({
    binhLuan: "",
    rating: 2.5,
    index: 1,
    luotThich: 0,
  });
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  let [limit, setLimit] = useState(5);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch({
      type: FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
      maPhim: props.match.params.id.substring(
        props.match.params.id.length - 4,
        props.match.params.id.length
      ),
    });
    dispatch({
      type: FETCH_USERS_COMMENT_REQUESTS_SAGA,
    });
    return () => {
      dispatch({
        type: FETCH_THONG_TIN_PHIM_CLEAN_UP,
      });
    };
  }, []);

  const renderAvatar = () => {
    if (localStorage.getItem("USER")) {
      let { hoTen } = JSON.parse(localStorage.getItem("USER"));
      return (
        <img
          src={`https://i.pravatar.cc/150/?u=${hoTen}`}
          width="60px"
          height="60px"
          className={classes.imgAvatar}
        />
      );
    } else {
      return (
        <img
          src={avatarDefault}
          width="60px"
          height="60px"
          style={{
            borderRadius: "50%",
            margin: "1rem 0rem 0rem 0.5rem",
          }}
        />
      );
    }
  };

  const onRatingChange = (newValue) => {
    setComment({
      ...comment,
      rating: newValue,
      index: 2,
    });
  };

  const handlePostComment = () => {
    if (!localStorage.getItem("USER")) {
      Swal.fire({
        icon: "warning",
        title: "Vui lòng đăng nhập để bình luận",
      });
      return;
    }
    if (
      comment.binhLuan === "" ||
      comment.rating == null ||
      comment.index == 1
    ) {
      Swal.fire({
        icon: "warning",
        title: "Đánh giá phim và bình luận không được bỏ trống",
      });
    } else {
      dispatch({
        type: POST_USERS_COMMENT_REQUESTS_SAGA,
        payload: comment,
      });
      setComment({
        ...comment,
        binhLuan: "",
        rating: 2.5,
        index: 1,
      });
    }
  };

  const renderStarUsersComment = (comment) => {
    let arr = [];
    let test = <GradeIcon style={{ fontSize: "0.8rem" }} />;
    let half = (
      <>
        <GradeIcon style={{ fontSize: "0.8rem" }} />
        <StarHalfIcon style={{ fontSize: "0.8rem" }} />
      </>
    );

    if (comment.danhGia > 1) {
      let checkStar;
      if (comment.danhGia % 2 == 0) {
        checkStar = comment.danhGia / 2;
        for (let i = 0; i < checkStar; i++) {
          arr.push(test);
        }
      } else {
        checkStar = (comment.danhGia - 1) / 2;
        for (let i = 0; i < checkStar; i++) {
          i === checkStar - 1 ? arr.push(half) : arr.push(test);
        }
      }
      return arr.map((value) => {
        return value;
      });
    } else return <StarHalfIcon style={{ fontSize: "0.8rem" }} />;
  };

  const handleRenderUsersComment = () => {
    if (comments) {
      let arrReverse = [...comments].slice(0).reverse();
      return arrReverse.slice(0, limit).map((comment) => {
        return (
          <Grid item xs={12}>
            <Box className={classes.otherUsersComment}>
              <Grid container spacing={2}>
                <Grid item sm={2} xs={3} style={{ color: "#5A5A5A" }}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src={`https://i.pravatar.cc/150/?u=${comment.hoTen}`}
                      width="60px"
                      height="60px"
                      className={classes.imgAvatarOtherUsers}
                    />
                  </Box>
                  <Box
                    style={{
                      marginTop: "0.5rem",
                      color: "rgb(236,70,248)",
                    }}
                    className={classes.scoreOtherUsers}
                  >
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ fontWeight: "bold" }}
                    >
                      {comment.danhGia}
                    </Typography>
                    <Box
                      style={{
                        marginBottom: "0.7rem",
                      }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {renderStarUsersComment(comment)}
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={10} xs={9} style={{ color: "#5A5A5A" }}>
                  <Box style={{ marginBottom: "0.7rem" }}>
                    <Typography style={{ fontSize: "1.15rem", color: "#000" }}>
                      {comment.hoTen}
                    </Typography>
                    <Typography style={{ fontSize: "0.8rem" }}>
                      2 ngày trước
                    </Typography>
                  </Box>
                  <div style={{ marginTop: "1.4rem" }}>
                    <Typography style={{ fontSize: "0.9rem" }}>
                      {comment.binhLuan}
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ color: "#5A5A5A", margin: "0 0.4rem" }}
                >
                  <hr
                    style={{
                      width: "100%",
                      marginBottom: ".5rem",
                      marginTop: "0rem",
                    }}
                  />
                  <Box display="flex">
                    <FavoriteBorderIcon style={{ color: "#5A5A5A" }} />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        style={{
                          marginLeft: "0.3rem",
                          fontSize: "0.9rem",
                        }}
                      >
                        <Typography
                          variant="span"
                          style={{ fontWeight: "bold" }}
                        >
                          {comment.luotThich}
                        </Typography>{" "}
                        Thích
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        );
      });
    }
  };

  return (
    <>
      <Box className={classes.bgColor}>
        <Box className={classes.containerForMovie}>
          <div className="background background-filter">
            <Box className="u-non-blurred">
              <Box className={`${classes.container}`}>
                <Box className={classes.realContainer}>
                  <div className={classes.root}>
                    <Grid container spacing={1}>
                      <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                          <Box className={classes.containerImage}>
                            <img
                              src={movieDetail?.hinhAnh}
                              width="100%"
                              style={{ borderRadius: "10px" }}
                            />
                            <Grid
                              container
                              spacing={3}
                              className={classes.stackContainer}
                            >
                              <Grid item xs={6} className={classes.stackItem}>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  flexDirection="column"
                                  onClick={handleOpen}
                                  style={{ cursor: "pointer" }}
                                >
                                  <PlayCircleFilledIcon
                                    style={{ color: "#FAFAFA" }}
                                  />
                                  <Typography
                                    component="p"
                                    style={{
                                      fontWeight: "300",
                                      fontSize: "14px",
                                      marginTop: "5px",
                                      color: "#FAFAFA",
                                    }}
                                  >
                                    Trailer
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6} className={classes.stackItem}>
                                <Box
                                  display="flex"
                                  alignItems="center"
                                  flexDirection="column"
                                >
                                  <ErrorOutlineIcon
                                    style={{ color: "#FAFAFA" }}
                                  />
                                  <Typography
                                    component="p"
                                    style={{
                                      fontWeight: "300",
                                      fontSize: "14px",
                                      marginTop: "5px",
                                      color: "#FAFAFA",
                                    }}
                                  >
                                    Chi tiết
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          <Box display="flex" className={classes.describeTitle}>
                            <Grid container spacing={1}>
                              <Grid item xs={9}>
                                <Box style={{ paddingRight: "1rem" }}>
                                  <Typography className={classes.mainTitle}>
                                    {movieDetail?.tenPhim}
                                  </Typography>
                                  <Typography
                                    style={{ margin: "0.1rem 0 0.8rem 0" }}
                                  >
                                    Thời lượng: 113 phút
                                  </Typography>
                                  <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    justifyItems="flex-start"
                                    className={classes.reviewContainer}
                                  >
                                    <Box>
                                      <VisibilityIcon />
                                      <Typography>3325</Typography>
                                    </Box>
                                    <Box>
                                      <StarIcon />
                                      <Typography>325</Typography>
                                    </Box>
                                    <Box>
                                      <SubjectIcon />
                                      <Typography>325</Typography>
                                    </Box>
                                  </Box>
                                  <Box style={{ margin: "1rem 0" }}>
                                    <Typography
                                      className={classes.fontForProduction}
                                    >
                                      Nhà sản xuất:{" "}
                                      <Typography display="inline">
                                        Mike Tyson
                                      </Typography>
                                    </Typography>
                                    <Typography
                                      className={classes.fontForProduction}
                                    >
                                      Quốc gia:{" "}
                                      <Typography display="inline">
                                        Mỹ
                                      </Typography>
                                    </Typography>
                                    <Typography
                                      className={classes.fontForProduction}
                                    >
                                      Thể loại:{" "}
                                      <Typography display="inline">
                                        Hành động
                                      </Typography>
                                    </Typography>
                                  </Box>
                                </Box>
                              </Grid>
                              <Grid
                                item
                                xs={3}
                                className={classes.hideOnMobileScore}
                              >
                                <Box
                                  display="flex"
                                  style={{
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    // alignItems: "center",
                                    height: "100%",
                                  }}
                                >
                                  <div
                                    className={`c100 p${
                                      movieDetail?.danhGia.length > 0
                                        ? movieDetail?.danhGia
                                        : movieDetail?.danhGia + "0"
                                    }`}
                                  >
                                    <span>{movieDetail?.danhGia}</span>
                                    <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                  </div>
                                  <div style={{ marginTop: "0.5rem" }}>
                                    <Typography style={{ textAlign: "center" }}>
                                      {totalComment ? totalComment : "10"} đánh
                                      giá
                                    </Typography>
                                  </div>
                                </Box>
                              </Grid>
                            </Grid>
                            <Box>
                              <Typography>&nbsp;</Typography>
                              <Typography className={classes.fontForProduction}>
                                Nội dung
                              </Typography>
                              <Typography>{movieDetail?.moTa}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Box>
            </Box>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className={classes.exitIcon} onClick={handleClose}>
                  <HighlightOffIcon
                    style={{
                      color: "#FAFAFA",
                      fontSize: "3rem",
                    }}
                  />
                </div>
                <iframe
                  width="100%"
                  height="100%"
                  src={movieDetail?.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Fade>
          </Modal>
        </Box>
        {/*Mobile */}
        <Box className={classes.forMobile}>
          <Box className={classes.containerImageMobile}>
            <img src={movieDetail?.hinhAnh} width="100%" />
            <div className={classes.overlay}></div>
            <div className={classes.playButton} onClick={handleOpen}>
              <PlayCircleOutlineIcon
                style={{ fontSize: "4rem", color: "#dbdbdb" }}
              />
            </div>
          </Box>
          <Box style={{ color: "#FAFAFA", margin: "1rem" }}>
            <Typography className={classes.ngayKhoiChieuMobile}>
              {new Date(movieDetail?.ngayKhoiChieu).toLocaleDateString(
                "en-GB",
                { month: "2-digit", day: "2-digit", year: "numeric" }
              )}
            </Typography>
            <Typography className={classes.titleMobile}>
              {movieDetail?.tenPhim}
            </Typography>
            <Typography className={classes.subMobile}>
              120 phút - {movieDetail?.danhGia} IMDb - 2D/Digital
            </Typography>
          </Box>
        </Box>
        <Box className={classes.containerForTabs}>
          <Box className={classes.tabs}>
            <AppBar position="static" className={classes.bgNavTab}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
              >
                <Tab label="Lịch chiếu" {...a11yProps(0)} />
                <Tab label="Đánh giá" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Box className={classes.container}>
                <Grid container spacing={1}>
                  <TabContainer />
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box className={classes.containerForComment}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box className={classes.userComment}>
                      <Grid container spacing={2}>
                        <Grid item sm={2} xs={3}>
                          {renderAvatar()}
                        </Grid>
                        <Grid item sm={10} xs={9}>
                          <Box style={{ marginBottom: "0.7rem" }}>
                            <div className={classes.rootStar}>
                              <Rating
                                name="half-rating"
                                value={comment.rating}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                  onRatingChange(newValue)
                                }
                              />
                            </div>
                          </Box>
                          <div className={classes.root}>
                            <TextField
                              className={classes}
                              id="outlined-basic"
                              variant="outlined"
                              value={comment.binhLuan}
                              placeholder="Cho người khác biết đánh giá của bạn về phim"
                              onChange={(e) => {
                                setComment({
                                  ...comment,
                                  binhLuan: e.target.value,
                                });
                              }}
                              InputProps={{
                                className: classes.inputRoot,
                              }}
                              fullWidth
                              multiline
                              rows={4}
                            />
                          </div>
                          <Box
                            display="grid"
                            style={{ justifyContent: "flex-end" }}
                          >
                            <Button
                              variant="contained"
                              className={classes.buttonBuyTicket}
                              onClick={handlePostComment}
                            >
                              <SendIcon style={{ color: "#FAFAFA" }} />
                              <Typography
                                variant="span"
                                style={{
                                  color: "#FAFAFA",
                                }}
                              >
                                Đăng
                              </Typography>
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  {handleRenderUsersComment()}
                </Grid>
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "plum",
                    color: "white",
                    marginTop: "1rem",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    setLimit((limit += 5));
                  }}
                >
                  Xem thêm
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Detail;
