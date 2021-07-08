import { useStyles } from "./styles";
import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button, Grid, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import cinemaIcon from "./../../assets/cinema.svg";
import { FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA } from "../../container/HomeTemplate/Home/modules/redux/constants";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const SearchBarDesktop = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
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

  const handleDispatchMovie = (maPhim) => {
    if (maPhim !== null || maPhim !== "") {
      dispatch({
        type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
        payload: maPhim,
      });
    }
  };

  useEffect(() => {
    if (infoSearch.phim !== "") {
      let findMaPhim = movieList.filter((movie) => {
        return movie.tenPhim === infoSearch.phim;
      });
      infoSearch.maPhim = findMaPhim[0].maPhim;
      handleDispatchMovie(infoSearch.maPhim);
    }
  }, [infoSearch]);

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
            <TextField
              {...params}
              label="Phim"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
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
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          value={infoSearch.cumRap}
          getOptionDisabled={(option) => true}
          options={["Vui lòng chọn phim"]}
          renderInput={(params) => (
            <TextField
              {...params}
              id="cumRap"
              label="Cụm Rạp"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
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
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          value={infoSearch.cumRap}
          options={["Vui lòng chọn phim và cụm rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenRap"
              label="Tên Rạp"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
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
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          value={infoSearch.ngayChieu}
          options={["Vui lòng chọn phim, cụm rạp và rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="ngayChieu"
              label="Ngày Chiếu"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
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
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          value={infoSearch.suatChieu}
          options={["Vui lòng chọn phim, cụm rạp, rạp, ngày chiếu"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="suatChieu"
              label="Suất Chiếu"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />
      );
    }
  };

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        {/* <h3 style={{ textAlign: "center" }}>Mua vé nhanh</h3> */}
        <Grid container spacing={1}>
          <Grid container item xs={2} spacing={0} className={classes.item}>
            {renderTenPhim()}
          </Grid>
          <Grid container item xs={2} spacing={0} className={classes.item}>
            {renderCumRap()}
          </Grid>
          <Grid container item xs={2} spacing={0} className={classes.item}>
            {renderRap()}
          </Grid>
          <Grid container item xs={2} spacing={0} className={classes.item}>
            {renderNgayChieu()}
          </Grid>
          <Grid container item xs={2} spacing={0} className={classes.item}>
            {renderGioChieu()}
          </Grid>
          <Grid
            container
            item
            xs={2}
            spacing={0}
            className={classes.buttonWrapper}
          >
            {/* <Button variant="contained" className={classes.button}>
              Mua vé ngay
            </Button> */}
            <Button
              variant="contained"
              className={classes.button}
              disabled={!infoSearch.buttonBuyTicket}
              onClick={() => {
                handleDirect();
              }}
            >
              Mua vé ngay
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchBarDesktop;
