import { Box, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./style";
import screen from "./../../../assets/screen.png";
import ThanhTien from "./ThanhTien/ThanhTien";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAN_UP_REDUCER_PHONG_VE,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
} from "./modules/redux/constants";
import Seat from "./Seat";
// import SeatEmpty from "./SeatEmpty";
import Summarize from "./Summarize";
import Swal from "sweetalert2";
import Countdown from "../../../components/Countdown";

const PhongVe = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const infoPhongVe = useSelector((state) => state.PhongVeReducer.infoPhongVe);
  const bookingSeat = useSelector((state) => state.PhongVeReducer?.bookingSeat);
  let checkSeat = 1;
  let validate = true;
  if (!localStorage.getItem("USER")) {
    props.history.push("/");
  }
  useEffect(() => {
    dispatch({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
      payload: props.match.params.id,
    });

    return () => {
      dispatch({
        type: CLEAN_UP_REDUCER_PHONG_VE,
      });
    };
  }, []);

  const handleNoti = (icon, title) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
    });
  };

  if (bookingSeat.length > 0) {
    // trên 2 ghế thì mới kiểm tra coi có ghế ở giữa hông
    if (bookingSeat.length > 1) {
      let getBookingSeat = [...bookingSeat];
      let middleStt = null;
      getBookingSeat.sort((a, b) => parseInt(a.stt) - parseInt(b.stt));
      getBookingSeat.map((seat1, index1) => {
        getBookingSeat.map((seat2, index2) => {
          if (index1 !== index2 && index1 < index2) {
            if (parseInt(seat1.stt) + 1 === parseInt(seat2.stt) - 1) {
              middleStt = parseInt(seat1.stt) + 1;
              //Kiểm tra xem ghế giữa đã có chọn chưa
              if (middleStt) {
                let index = getBookingSeat.findIndex((check) => {
                  return parseInt(check.stt) === middleStt;
                });
                if (index === -1) {
                  handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở giữa");
                  validate = false;
                  return;
                }
              }
            }
          }
        });
      });
    }
    bookingSeat.map((booking, index) => {
      if ((parseInt(booking.stt) + 1) % 16 == 0) {
        let check = parseInt(booking.stt) + 1;
        let index = bookingSeat.findIndex((booking, index) => {
          return parseInt(booking.stt) === check;
        });
        if (index === -1) {
          handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy");
          validate = false;
          return;
        }
      } else {
        let firstSeatRow = 1;
        for (let i = 1; i <= 11; i++) {
          if (parseInt(booking.stt) - 1 == firstSeatRow) {
            let check = parseInt(booking.stt) - 1;
            let index = bookingSeat.findIndex((booking, index) => {
              return parseInt(booking.stt) === check;
            });
            if (index === -1) {
              handleNoti(
                "warning",
                "Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy"
              );
              validate = false;
              return;
            }
          } else {
            firstSeatRow += 16;
          }
        }
      }
    });

    let bookedSeat = [...infoPhongVe.danhSachGhe].filter((booked) => {
      return booked.daDat;
    });

    let middleStt = null;

    bookingSeat.map((booking) => {
      bookedSeat.map((booked) => {
        if (parseInt(booking.stt) + 1 === parseInt(booked.stt) - 1) {
          middleStt = parseInt(booking.stt) + 1;
          return;
        } else if (parseInt(booking.stt) - 1 === parseInt(booked.stt) + 1) {
          middleStt = parseInt(booking.stt) - 1;
          return;
        }
      });
    });
    console.log(middleStt);
    if (middleStt) {
      console.log(middleStt);
      let indexBooked = bookedSeat.findIndex((booked) => {
        return parseInt(booked.stt) === middleStt;
      });
      console.log(indexBooked);
      if (indexBooked === -1) {
        let indexBooking = bookingSeat.findIndex((booking) => {
          return parseInt(booking.stt) === middleStt;
        });
        if (indexBooking === -1) {
          handleNoti("warning", "Bạn không thể bỏ trống 1 ghế ở giữa");
          validate = false;
          // return;
        }
      }
    }
  }

  const renderSeat = () => {
    return infoPhongVe?.danhSachGhe.map((ghe, index) => {
      if ((index + 1) % 16 === 0) {
        checkSeat = index + 2;
        return (
          <>
            <Seat gheInfo={ghe} />
            <br />
          </>
        );
      }
      // if (index === checkSeat) {
      //   checkSeat += 12;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // } else if (index === checkSeat) {
      //   checkSeat += 3;
      //   return (
      //     <>
      //       <Seat gheInfo={ghe} />
      //       <SeatEmpty />
      //     </>
      //   );
      // }
      return (
        <>
          <Seat gheInfo={ghe} />
        </>
      );
    });
  };

  return (
    <div className={classes.bgColor}>
      <div className={classes.container}>
        <Countdown />
        <Grid container spacing={0} style={{ flexDirection: "column" }}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              style={{
                marginTop: "1.5rem",
              }}
              className={classes.overflow}
            >
              <img src={screen} className={classes.overflow} />
              <Box className={classes.overflow}>
                <Box className={classes.renderSeatWrapper}>{renderSeat()}</Box>
              </Box>
            </Box>
          </Grid>
          <Box>
            <Summarize />
          </Box>
          <ThanhTien infoPhongVe={infoPhongVe} validate={validate} />
        </Grid>
      </div>
    </div>
  );
};

export default PhongVe;
