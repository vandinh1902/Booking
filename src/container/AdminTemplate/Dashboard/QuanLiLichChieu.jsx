import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import { useSelector, useDispatch } from "react-redux";
import {
  FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
} from "../../HomeTemplate/Home/modules/redux/constants";
import { POST_TAO_LICH_CHIEU_REQUESTED_SAGA } from "./modules/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const QuanLiLichChieu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = useState(new Date());
  const movieList = useSelector((state) => state.MovieReducer.movieList);
  const heThongRap = useSelector((state) => state.MovieReducer.theater);
  const tenRap = useSelector((state) => state.MovieReducer.thongTinCumRap);
  const [infoLichChieu, setInfoLichChieu] = useState({
    maPhim: "",
    phim: "",
    cumRap: "",
    tenCumRap: "",
    maRap: "",
    tenMaRap: "",
    ngayChieu: "",
    ngayChieuGioChieu: new Date(),
    giaVe: "75000",
  });

  //Khi user vừa chọn trong ô textfield đầu tiên thì sẽ
  // disppatch thông tin phim đó lên để lấy data cho các ô khác
  // (mặc định chỉ có mỗi ô đầu có dữ liệu nên phải đợi user chọn phim mới lấy đc info)

  const handleDispatchMovie = (phim) => {
    let findMaPhim = movieList.filter((movie) => {
      return movie.tenPhim === phim;
    });
    let maPhimBlock = findMaPhim[0].maPhim;
    infoLichChieu.maPhim = findMaPhim[0].maPhim;
    dispatch({
      type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
      payload: maPhimBlock,
    });
  };

  const handleDispatchTenCumRap = (tenHeThongRap) => {
    let findMaHeThongRap = heThongRap.filter((rap) => {
      return rap.tenHeThongRap === tenHeThongRap;
    });
    let maHeThongRap = findMaHeThongRap[0].maHeThongRap;
    infoLichChieu.cumRap = findMaHeThongRap[0].maHeThongRap;
    dispatch({
      type: FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA,
      payload: maHeThongRap,
    });
  };

  const handleDispatchLichChieu = () => {
    if (infoLichChieu.ngayChieuGioChieu !== "") {
      const optionsDate = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      const optionsTime = {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const date = selectedDate.toLocaleDateString("en-GB", optionsDate);
      const time = selectedDate.toLocaleTimeString("en-GB", optionsTime);
      const { maPhim, maRap, giaVe } = infoLichChieu;
      let ngayChieuGioChieu = date + " " + time;
      const payload = {
        maPhim: parseInt(maPhim),
        ngayChieuGioChieu,
        maRap: parseInt(maRap),
        giaVe: parseInt(giaVe),
      };
      dispatch({
        type: POST_TAO_LICH_CHIEU_REQUESTED_SAGA,
        payload,
      });
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
          // size="small"
          fullWidth="true"
          options={arr}
          value={infoLichChieu.phim}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            // Chặn dispatch khi không có dữ liệu
            if (newValue == null) {
              setInfoLichChieu({
                ...infoLichChieu,
                maPhim: "",
                phim: "",
              });
              return;
            }
            handleDispatchMovie(newValue);
            setInfoLichChieu({
              ...infoLichChieu,
              phim: newValue,
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
    let arr = heThongRap.map((cumRap) => {
      return cumRap.tenHeThongRap;
    });
    return (
      <Autocomplete
        classes={classes}
        fullWidth="true"
        options={arr}
        value={infoLichChieu.cumRap}
        getOptionLabel={(option) => option}
        //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
        onChange={(event, newValue) => {
          if (newValue == null) {
            setInfoLichChieu({
              ...infoLichChieu,
              cumRap: "",
              tenCumRap: "",
              maRap: "",
            });
            return;
          }
          handleDispatchTenCumRap(newValue);
          setInfoLichChieu({
            ...infoLichChieu,
            cumRap: newValue,
            tenCumRap: "",
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
  };

  const renderTenRap = () => {
    if (tenRap && infoLichChieu.cumRap) {
      let arr = tenRap.map((ten) => {
        return ten.tenCumRap;
      });

      return (
        <Autocomplete
          classes={classes}
          fullWidth="true"
          options={arr}
          value={infoLichChieu.tenCumRap}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            if (newValue == null) {
              setInfoLichChieu({
                ...infoLichChieu,
                tenCumRap: "",
              });
              return;
            }
            setInfoLichChieu({
              ...infoLichChieu,
              tenCumRap: newValue,
              maRap: "",
            });
            // findMaRap(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenCumRap"
              label="Tên Cụm Rạp"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          fullWidth="true"
          value={infoLichChieu.tenCumRap}
          options={["Vui lòng chọn cụm rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenCumRap"
              label="Tên Rạp"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  //Vì thằng autocomplete chỉ cho render mà tên hoặc mã k được render ra object.tên
  //nên phải làm thêm 1 hàm để truy xuất khi có dữ liệu tên rạp thì trigger hàm
  // tìm mã rạp
  const findMaRap = (tenMaRap) => {
    if (tenRap) {
      let maRapContainer = tenRap.filter((rap) => {
        return rap.tenCumRap === infoLichChieu.tenCumRap;
      });
      let maRapArr = maRapContainer[0].danhSachRap.filter((maRap) => {
        return maRap.tenRap === tenMaRap;
      });
      setInfoLichChieu({
        ...infoLichChieu,
        tenMaRap,
        maRap: maRapArr[0].maRap,
      });
    }
  };

  const renderTenMaRap = () => {
    if (tenRap && infoLichChieu.tenCumRap !== "") {
      let maRapContainer = tenRap.filter((rap) => {
        return rap.tenCumRap === infoLichChieu.tenCumRap;
      });
      let maRapArr = maRapContainer[0].danhSachRap.map((maRap) => {
        return maRap.tenRap;
      });
      return (
        <Autocomplete
          classes={classes}
          fullWidth="true"
          options={maRapArr}
          value={infoLichChieu.tenMaRap}
          getOptionLabel={(option) => option}
          //On change để khi người dùng thay đổi thông tin liền gọi hàm handleDispatchMovie để fetch dữ liệu về.
          onChange={(event, newValue) => {
            if (newValue == null) {
              setInfoLichChieu({
                ...infoLichChieu,
                tenMaRap: "",
              });
              return;
            }
            // setInfoLichChieu({
            //   ...infoLichChieu,
            //   tenMaRap: newValue,
            // });
            findMaRap(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenMaRap"
              label="Tên mã rạp"
              variant="outlined"
            />
          )}
        />
      );
    } else {
      return (
        <Autocomplete
          classes={classes}
          fullWidth="true"
          value={infoLichChieu.maRap}
          options={["Vui lòng chọn cụm rạp và tên rạp"]}
          getOptionDisabled={(option) => true}
          renderInput={(params) => (
            <TextField
              {...params}
              id="tenMaRap"
              label="Tên mã rạp"
              variant="outlined"
            />
          )}
        />
      );
    }
  };

  let giaTienArr = ["75000", "90000", "120000", "150000"];

  const renderGiaVe = () => {
    return (
      <Autocomplete
        classes={classes}
        fullWidth="true"
        value={infoLichChieu.giaVe}
        options={giaTienArr}
        getOptionLabel={(option) => option}
        onChange={(event, newValue) => {
          if (newValue == null) {
            setInfoLichChieu({
              ...infoLichChieu,
              giaVe: "",
            });
            return;
          }
          setInfoLichChieu({
            ...infoLichChieu,
            giaVe: newValue,
          });
        }}
        renderInput={(params) => (
          <TextField {...params} id="giaVe" label="Giá vé" variant="outlined" />
        )}
      />
    );
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {renderTenPhim()}
        </Grid>
        <Grid item xs={4}>
          {renderTenMaRap()}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {renderCumRap()}
        </Grid>
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              inputVariant="outlined"
              fullWidth="true"
              ampm={false}
              label="Suất chiếu"
              value={selectedDate}
              onChange={handleDateChange}
              onError={console.log}
              disablePast
              format="dd/MM/yyyy HH:mm:SS"
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {renderTenRap()}
        </Grid>
        <Grid item xs={4}>
          {renderGiaVe()}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleDispatchLichChieu()}
          >
            Tạo lịch chiếu
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuanLiLichChieu;
