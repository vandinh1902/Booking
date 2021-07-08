import { Box, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "./styles";

const Countdown = () => {
  const classes = useStyles();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const countDownTime = () => {
    if (seconds == 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    const token = setTimeout(countDownTime, 1000);
    if (seconds == 0 && minutes == 0) {
      clearTimeout(token);
      setOpen(true);
    }

    return () => {
      clearTimeout(token);
    };
  });

  const handleOpenModal = () => {
    return (
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
            <Typography>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 5 phút
            </Typography>
            <Button
              onClick={() => window.location.reload()}
              className={classes.datVeLai}
            >
              Đặt vé lại
            </Button>
          </div>
        </Fade>
      </Modal>
    );
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={classes.titleTheaterSpan}>
          Thời gian giữ ghế
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box className={classes.countDownWrapper}>
            <Typography className={classes.countDown}>
              {minutes.toString().length < 2 ? "0" + minutes : minutes}
            </Typography>
          </Box>
          <Typography className={classes.haiCham}>:</Typography>
          <Box className={classes.countDownWrapper}>
            <Typography className={classes.countDown}>
              {seconds.toString().length < 2 ? "0" + seconds : seconds}
            </Typography>
          </Box>
        </Box>
      </Box>
      {handleOpenModal()}
    </div>
  );
};

export default Countdown;
