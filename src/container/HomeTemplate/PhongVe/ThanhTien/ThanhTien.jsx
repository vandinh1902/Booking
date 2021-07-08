import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import { POST_THONG_TIN_DAT_VE_REQUESTS_SAGA } from "../modules/redux/constants";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Confirm from "./Confirm/Confirm";

const ThanhTien = ({ infoPhongVe, maLichChieu, validate }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const priceSeat = useSelector(
    (state) => state.PhongVeReducer?.totalPriceSeat
  );
  const bookingSeat = useSelector((state) => state.PhongVeReducer?.bookingSeat);
  const [open, setOpen] = React.useState(false);
  const [disableConfirm, setDisableConfirm] = useState(validate);
  useEffect(() => {
    setDisableConfirm(validate);
  }, [validate]);

  if (!infoPhongVe) {
    return null;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = () => {
    if (bookingSeat.length > 0) {
      setOpen(true);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Bạn chưa chọn ghế",
      });
    }
  };

  const renderSeat = () => {
    if (bookingSeat.length > 0) {
      return bookingSeat.map((seat, index) => {
        if (index === 0) {
          return (
            <Typography className={classes.name} key={uuidv4()}>
              {seat.tenGhe}
            </Typography>
          );
        }
        return (
          <Typography className={classes.name} key={uuidv4()}>
            , {seat.tenGhe}
          </Typography>
        );
      });
    }
  };
  return (
    <div className={classes.bgThanhToan}>
      <div className={classes.containerThanhToan}>
        <div className={classes.formatTop}></div>
        <Grid container>
          <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
            <Box display="flex">
              <img
                src={infoPhongVe.thongTinPhim.hinhAnh}
                width="90px"
                style={{ borderRadius: "4px" }}
              />
              <Box style={{ margin: "0.25rem" }}>
                <Typography className={classes.name}>
                  {infoPhongVe.thongTinPhim.tenPhim}
                </Typography>
                <Typography
                  className={classes.name}
                  style={{ display: "block" }}
                >
                  2D
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
            <Box>
              <Typography className={classes.main}>
                Rạp:{" "}
                <Typography className={classes.name}>
                  {infoPhongVe.thongTinPhim.tenCumRap}
                </Typography>
              </Typography>
              <Typography className={classes.main}>
                Suất chiếu:{" "}
                <Typography className={classes.name}>
                  {infoPhongVe.thongTinPhim.ngayChieu}{" "}
                  {infoPhongVe.thongTinPhim.gioChieu}
                </Typography>
              </Typography>
              <Typography className={classes.main}>
                Phòng chiếu:{" "}
                <Typography className={classes.name}>
                  {infoPhongVe.thongTinPhim.tenRap}
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: "0.5rem" }}>
            <Box>
              <Typography className={classes.main}>
                Ghế:{" "}
                <Typography className={classes.name}>{renderSeat()}</Typography>
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.main}>
                Giá:{" "}
                <Typography className={classes.name}>{priceSeat}</Typography>
              </Typography>
            </Box>
            <Button
              fullWidth
              onClick={handleCheck}
              variant="contained"
              style={{ backgroundColor: "plum", marginTop: "1rem" }}
              disabled={!disableConfirm}
            >
              Xác nhận
            </Button>
          </Grid>
        </Grid>
        <div className={classes.formatBottom}></div>
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
            <Confirm infoPhongVe={infoPhongVe} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ThanhTien;
