import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  timeWrapper: {
    cursor: "pointer",
    padding: "0.25rem 0.5rem !important",
    backgroundColor: "#FBFBFB",
    margin: "0.5rem 0.5rem 0.25rem 0rem",
    borderRadius: "7px",
    border: "1px solid #B5b5b5",
    display: "inline-block",
    color: "#118F3E !important",
    fontSize: "18px",
    fontWeight: "500",
  },

  mainTime: {
    display: "inline",
  },

  subTime: {
    display: "inline",
    marginLeft: "0.2rem",
    color: "#9B9B9B",
    fontSize: "14px",
  },

  link: {
    color: "#118F3E !important",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Gio = ({ details, day }) => {
  const classes = useStyles();
  const history = useHistory();

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const optionsHours = { hour: "2-digit", minute: "2-digit" };
  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };

  const handleDirect = (maLichChieu) => {
    if (!localStorage.getItem("USER")) {
      Swal.fire({
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
      history.push(`/checkout/${maLichChieu}`);
    }
  };

  const checkEqualDay = details.lichChieuPhim.filter((lichChieu) => {
    return (
      new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString(
        "en-GB",
        options
      ) === day
    );
  });

  const renderGioChieu = () => {
    return checkEqualDay.map((gios) => {
      const gioGeneral = new Date(gios.ngayChieuGioChieu);
      const endTimeGeneral = gioGeneral.addHours(2);
      const gioFormat = new Date(gios.ngayChieuGioChieu).toLocaleTimeString(
        "en-GB",
        optionsHours
      );
      const endGioFormat = endTimeGeneral.toLocaleTimeString(
        "en-GB",
        optionsHours
      );
      return (
        <Box
          className={classes.timeWrapper}
          onClick={() => {
            handleDirect(gios.maLichChieu);
          }}
        >
          <Box className={classes.mainTime}>{gioFormat}</Box>
          <Box className={classes.subTime}>~ {endGioFormat}</Box>
        </Box>
      );
    });
  };

  return <div>{renderGioChieu()}</div>;
};

export default Gio;
