import { useStyle } from "./style";
import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Box,
  Button,
  createMuiTheme,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import cinemaIcon from "./../../assets/cinema.svg";
import { FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA } from "../../container/HomeTemplate/Home/modules/redux/constants";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const TransitionsModal = () => {
  const history = useHistory();
  const classes = useStyle();
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.MovieReducer.isModal);
  const movieList = useSelector((state) => state.MovieReducer.movieList);
  const searchMovieFind = useSelector(
    (state) => state.MovieReducer.searchMovieFind
  );

  let [infoSearch, setInfoSearch] = useState({
    maPhim: "",
    phim: "",
    cumRap: "",
    tenRap: "",
    ngayChieu: "",
    suatChieu: "",
    buttonBuyTicket: false,
  });

  let [maLichChieu, setMaLichChieu] = useState({
    maLichChieu: null,
  });

  //Khi user vừa chọn trong ô textfield đầu tiên thì sẽ
  // disppatch thông tin phim đó lên để lấy data cho các ô khác
  // (mặc định chỉ có mỗi ô đầu có dữ liệu nên phải đợi user chọn phim mới lấy đc info)
  const handleDispatchMovie = (maPhim) => {
    if (maPhim !== null || maPhim !== "") {
      dispatch({
        type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
        payload: maPhim,
      });
    }
  };

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(isModal);
  }, [isModal]);

  useEffect(() => {
    if (infoSearch.phim !== "") {
      let findMaPhim = movieList.filter((movie) => {
        return movie.tenPhim === infoSearch.phim;
      });
      infoSearch.maPhim = findMaPhim[0].maPhim;
      handleDispatchMovie(infoSearch.maPhim);
    }
  }, [infoSearch]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDirect = () => {
    if (!localStorage.getItem("USER")) {
      Swal.fire({
        customClass: {
          container: classes.sweetAlert,
        },
        icon: "warning",
        title: `Vui lòng đăng nhập!`,
        showCancelButton: true,
        confirmButtonText: `Đăng nhập`,
      }).then((result) => {
        if (result.isConfirmed) {
          history.push(`/signin`);
        }
        return;
      });
    } else {
      history.push(`/checkout/${maLichChieu.maLichChieu}`);
    }
  };

  const renderTenPhim = () => {
    if (movieList) {
      let arr = movieList.map((item) => {
        return item.tenPhim;
      });
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          options={arr}
          value={infoSearch.phim}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            if (newValue == null) {
              setInfoSearch({
                phim: "",
                cumRap: "",
                tenRap: "",
                ngayChieu: "",
                suatChieu: "",
                buttonBuyTicket: false,
              });
              return;
            }
            setInfoSearch({
              phim: newValue,
              maLichChieu: null,
              cumRap: "",
              tenRap: "",
              ngayChieu: "",
              suatChieu: "",
              buttonBuyTicket: false,
            });
          }}
          renderInput={(params) => (
            <TextField {...params} id="phim" label="Phim" variant="outlined" />
          )}
        />
      );
    }
  };

  const renderCumRap = () => {
    if (searchMovieFind && infoSearch.phim !== "") {
      let arr = searchMovieFind.heThongRapChieu.map((cumRap) => {
        return cumRap.tenHeThongRap;
      });
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          options={arr}
          value={infoSearch.cumRap}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            setInfoSearch({
              ...infoSearch,
              cumRap: newValue,
              tenRap: "",
              ngayChieu: "",
              suatChieu: "",
              buttonBuyTicket: false,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="cumRap"
              label="Cụm Rạp"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          value={infoSearch.cumRap}
          getOptionDisabled={(option) => true}
          options={["Vui lòng chọn phim"]}
          renderInput={(params) => (
            <TextField
              {...params}
              id="cumRap"
              label="Cụm Rạp"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  const renderRap = () => {
    if (searchMovieFind && infoSearch.cumRap) {
      let arr = searchMovieFind.heThongRapChieu.filter((cumRap) => {
        return cumRap.tenHeThongRap === infoSearch.cumRap;
      });
      let findExactRapChieu = arr.map((rap) => {
        return rap.cumRapChieu;
      });

      let showExactRapChieu = findExactRapChieu[0].map((rap) => {
        return rap.tenCumRap;
      });
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          options={showExactRapChieu}
          value={infoSearch.tenRap}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            setInfoSearch({
              ...infoSearch,
              tenRap: newValue,
              ngayChieu: "",
              suatChieu: "",
              buttonBuyTicket: false,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenRap"
              label="Tên Rạp"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          value={infoSearch.cumRap}
          options={["Vui lòng chọn phim và cụm rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenRap"
              label="Tên Rạp"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  const renderNgayChieu = () => {
    if (infoSearch.phim && infoSearch.cumRap && infoSearch.tenRap) {
      let arr = searchMovieFind.heThongRapChieu.filter((cumRap) => {
        return cumRap.tenHeThongRap === infoSearch.cumRap;
      });
      let rapChieu = arr[0].cumRapChieu.filter((cumRap) => {
        return cumRap.tenCumRap === infoSearch.tenRap;
      });
      const listDay = new Set(
        rapChieu[0].lichChieuPhim.map((lichChieu) => {
          return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
        })
      );
      const arrDay = [...listDay];
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          options={arrDay}
          value={infoSearch.ngayChieu}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            setInfoSearch({
              ...infoSearch,
              ngayChieu: newValue,
              suatChieu: "",
              buttonBuyTicket: false,
            });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="ngayChieu"
              label="Ngày Chiếu"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          value={infoSearch.ngayChieu}
          options={["Vui lòng chọn phim, cụm rạp và rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="ngayChieu"
              label="Ngày Chiếu"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  const renderGioChieu = () => {
    if (
      infoSearch.phim &&
      infoSearch.cumRap &&
      infoSearch.tenRap &&
      infoSearch.ngayChieu
    ) {
      let arr = searchMovieFind.heThongRapChieu.filter((cumRap) => {
        return cumRap.tenHeThongRap === infoSearch.cumRap;
      });
      let rapChieu = arr[0].cumRapChieu.filter((cumRap) => {
        return cumRap.tenCumRap === infoSearch.tenRap;
      });
      let gioChieu = rapChieu[0].lichChieuPhim.filter((lichChieu) => {
        return (
          new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() ===
          infoSearch.ngayChieu
        );
      });
      let showGioChieu = gioChieu.map((gio, index) => {
        return gio.ngayChieuGioChieu.slice(-8, -3);
      });

      let getMaLichChieuFunc = (gioCut) => {
        if (gioCut !== null || gioCut !== "") {
          let getMaLichChieu = gioChieu.filter((gio, index) => {
            return gio.ngayChieuGioChieu.slice(-8, -3) === gioCut;
          });
          setMaLichChieu({
            maLichChieu: getMaLichChieu[0].maLichChieu,
          });
        }
      };
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          options={showGioChieu}
          value={infoSearch.suatChieu}
          getOptionLabel={(option) => option}
          onChange={(event, newValue) => {
            if (newValue == null) {
              setInfoSearch({
                ...infoSearch,
                maLichChieu: null,
                suatChieu: newValue,
                buttonBuyTicket: false,
              });
              return;
            }
            setInfoSearch({
              ...infoSearch,
              suatChieu: newValue,
              buttonBuyTicket: true,
            });

            getMaLichChieuFunc(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="suatChieu"
              label="Suất Chiếu"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          size="small"
          fullWidth="true"
          value={infoSearch.suatChieu}
          options={["Vui lòng chọn phim, cụm rạp, rạp, ngày chiếu"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="suatChieu"
              label="Suất Chiếu"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={
          (handleClose,
          () =>
            dispatch({
              type: "CHANGE_MODAL_OPEN",
            }))
        }
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box
              onClick={
                (handleClose,
                () =>
                  dispatch({
                    type: "CHANGE_MODAL_OPEN",
                  }))
              }
            >
              <CloseIcon className={classes.iconClose} />
            </Box>
            <Box className={classes.container}>
              <Box className={classes.searchContainer}>
                <SearchIcon style={{ fontSize: "1.5rem" }} />
              </Box>
              <Typography
                style={{
                  color: "violet",
                  margin: "1rem 0",
                  fontWeight: "bold",
                }}
                variant="h4"
              >
                Tìm ngay phim bạn thích!
              </Typography>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.gridItems}
                  >
                    {renderTenPhim()}
                  </Grid>
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.gridItems}
                  >
                    {renderCumRap()}
                  </Grid>
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.gridItems}
                  >
                    {renderRap()}
                  </Grid>
                  <Grid
                    item
                    md={8}
                    sm={6}
                    xs={12}
                    className={classes.gridItems}
                  >
                    {renderNgayChieu()}
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                    className={classes.gridItems}
                  >
                    {renderGioChieu()}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  className={classes.buttonBuyTicket}
                  disabled={!infoSearch.buttonBuyTicket}
                  onClick={() => {
                    handleDirect();
                  }}
                >
                  <img src={cinemaIcon} width="30px" />
                  <Typography
                    variant="span"
                    style={{ marginLeft: "5px", color: "#FAFAFA" }}
                  >
                    Mua vé
                  </Typography>
                </Button>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
