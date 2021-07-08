import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

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

const Gio = ({ gioChieu }) => {
  const classes = useStyles();
  const history = useHistory();
  const options = { hour: "2-digit", minute: "2-digit" };
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
    if (gioChieu.length > 0) {
      return gioChieu.map((gios) => {
        const gioGeneral = new Date(gios.ngayChieuGioChieu);
        const endTimeGeneral = gioGeneral.addHours(2);
        const gioFormat = new Date(gios.ngayChieuGioChieu).toLocaleTimeString(
          "en-GB",
          options
        );
        const endGioFormat = endTimeGeneral.toLocaleTimeString(
          "en-GB",
          options
        );
        return (
          <Box
            key={uuidv4()}
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
    }
  };
  return <div>{renderGio()}</div>;
};

export default Gio;
