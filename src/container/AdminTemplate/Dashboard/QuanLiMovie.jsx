import axios from "axios";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { DOMAIN, MA_NHOM, STATUS_CODE } from "../../../utils/common/constants";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Swal from "sweetalert2";
import { CardMedia, TextField } from "@material-ui/core";

const QuanLiMovie = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );
  const { maNhom, maLoaiNguoiDung, accessToken } = JSON.parse(
    localStorage.getItem("ADMIN")
  );
  const [columns, setColumns] = useState([
    {
      title: "Mã phim",
      field: "maPhim",
      type: "numeric",
      editable: "onAdd",
    },
    {
      title: "Tên phim",
      field: "tenPhim",
    },
    { title: "Bí danh", field: "biDanh" },
    {
      title: "Trailer",
      field: "trailer",
      render: (props) => <div>[Chi tiết]</div>,
    },
    {
      title: "Hình ảnh",
      field: "hinhAnh",
      editComponent: (props) => (
        <input
          type="file"
          onChange={(e) => props.onChange(e.target.files[0])}
        />
      ),
      render: (rowData) => (
        <img src={rowData.hinhAnh} style={{ width: 75, borderRadius: "4px" }} />
      ),
    },
    {
      title: "Mô tả",
      field: "moTa",
      render: (rowData) => (
        <div style={{ width: "100%", minWidth: "350px", textAlign: "justify" }}>
          {rowData.moTa}
        </div>
      ),
    },
    {
      title: "Ngày khởi chiếu",
      field: "ngayKhoiChieu",
      dateSetting: { locale: "en-GB" },
      editComponent: (props) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            style={{ minWidth: "125px" }}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            // value={selectedDate}
            // onChange={handleDateChange}
            value={props.value ? props.value : new Date().toLocaleDateString()}
            onChange={(date) => {
              props.onChange(date);
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      ),
      render: (rowData) => (
        <div style={{ width: "100%", width: "100px", textAlign: "justify" }}>
          {new Date(rowData.ngayKhoiChieu).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </div>
      ),
    },
    {
      title: "Đánh giá",
      field: "danhGia",
      type: "numeric",
    },
  ]);

  const [data, setData] = useState([]);
  const adminInfo = JSON.parse(localStorage.getItem("ADMIN"));

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleNoti = (icon, title, text) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
    });
  };

  const handleFetchData = () => {
    axios({
      method: "GET",
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDeleteMovie = async (maPhim) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminInfo.accessToken}`,
        },
      });
      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Xoá thành công", "");
        handleFetchData();
      }
    } catch (err) {
      handleNoti("error", "Xoá thất bại", `${err.response.data}`);
    }
  };

  const handleAddMovie = async (infoMovie) => {
    let frm = new FormData();
    let danhGia = parseInt(infoMovie.danhGia);
    let maPhim = parseInt(infoMovie.maPhim);
    let ngayKhoiChieu = infoMovie.ngayKhoiChieu?.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const infoMovieSend = {
      ...infoMovie,
      danhGia,
      maPhim,
      maNhom: "GP09",
      ngayKhoiChieu,
    };
    for (let key in infoMovieSend) {
      frm.append(key, infoMovieSend[key]);
    }

    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyPhim/ThemPhimUploadHinh`,
        method: "POST",
        data: frm,
      });

      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Thêm phim thành công", "");
        handleFetchData();
      }
    } catch (err) {
      handleNoti("error", "Thêm phim thất bại", `${err.response.data}`);
    }
  };

  const handleEditMovie = async (infoMovie) => {
    let frm = new FormData();
    let danhGia = parseInt(infoMovie.danhGia);
    let maPhim = parseInt(infoMovie.maPhim);
    let ngayKhoiChieu = new Date(infoMovie.ngayKhoiChieu).toLocaleDateString(
      "en-GB",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    );
    const infoMovieSend = {
      ...infoMovie,
      danhGia,
      maPhim,
      maNhom: "GP09",
      ngayKhoiChieu,
    };
    for (let key in infoMovieSend) {
      frm.append(key, infoMovieSend[key]);
    }

    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyPhim/CapNhatPhimUpload`,
        method: "POST",
        data: frm,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Cập nhật phim thành công", "");
        handleFetchData();
      }
    } catch (err) {
      handleNoti("error", "Cập nhật phim thất bại", `${err.response.data}`);
    }
  };

  return (
    <div>
      <MaterialTable
        title="Quản lí phim"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              handleAddMovie(newData);
              resolve();
            }, 1000),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleEditMovie(newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                handleDeleteMovie(oldData.maPhim);
                resolve();
              }, 1000);
            }),
        }}
        options={{
          tableLayout: "auto",
        }}
        detailPanel={(rowData) => {
          return (
            <iframe
              width="80%"
              height="500px"
              src={`${rowData.trailer}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </div>
  );
};

export default QuanLiMovie;
