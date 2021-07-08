import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { addHours, getHours } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import Typography from "material-ui/styles/typography";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  timeWrapper: {
    cursor: "pointer",
    padding: "0.25rem 0.5rem !important",
    backgroundColor: "#FBFBFB",
    margin: "0.25rem ",
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

const Gio = ({ gios }) => {
  const history = useHistory();
  const classes = useStyles();
  const options = { hour: "2-digit", minute: "2-digit" };
  // Thời gian hết phim thêm 2 tiếng
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

  const renderGio = () => {
    return gios.map((gio) => {
      const gioGeneral = new Date(gio.ngayChieuGioChieu);
      const endTimeGeneral = gioGeneral.addHours(2);
      const gioFormat = new Date(gio.ngayChieuGioChieu).toLocaleTimeString(
        "en-GB",
        options
      );
      const endGioFormat = endTimeGeneral.toLocaleTimeString("en-GB", options);
      return (
        <Box
          key={uuidv4()}
          className={classes.timeWrapper}
          onClick={() => handleDirect(gio.maLichChieu)}
        >
          <Box className={classes.mainTime}>{gioFormat}</Box>
          <Box className={classes.subTime}>~ {endGioFormat}</Box>
        </Box>
      );
    });
  };
  return <div>{renderGio()}</div>;
};

export default Gio;
