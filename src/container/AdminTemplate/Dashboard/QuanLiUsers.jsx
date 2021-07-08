import React, { useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import MaterialTable from "material-table";
import Axios from "axios";
import Swal from "sweetalert2";
import { DOMAIN, STATUS_CODE } from "./../../../utils/common/constants";
import axios from "axios";
import { MA_NHOM } from "../../../SystemServices";

export default function StickyHeadTable() {
  const maNhom = MA_NHOM;
  const adminInfo = JSON.parse(localStorage.getItem("ADMIN"));
  const [data, setData] = useState([]);

  const [columns, setColumns] = useState([
    {
      title: "Tài khoản",
      field: "taiKhoan",
      editable: "onAdd",
    },
    { title: "Mật khẩu", field: "matKhau" },
    { title: "Họ tên", field: "hoTen" },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "soDt", type: "numeric" },
    {
      title: "Mã loại",
      field: "maLoaiNguoiDung",
      lookup: { KhachHang: "KhachHang", QuanTri: "QuanTri" },
    },
  ]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleNoti = (icon, title, text) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
    });
  };

  const handleChangeUserInfo = async (userInfo) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: userInfo,
        headers: {
          Authorization: `Bearer ${adminInfo.accessToken}`,
        },
      });
      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Cập nhật thành công", "");
        handleFetchData();
      }
    } catch (err) {
      handleNoti("error", "Cập nhật thất bại", `${err.response.data}`);
    }
  };

  const handleDeleteUserInfo = async (taiKhoan) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
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

  const handleAddUser = async (userInfo) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung`,
        data: userInfo,
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminInfo.accessToken}`,
        },
      });
      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Thêm thành công", "");
        handleFetchData();
      }
    } catch (err) {
      handleNoti("error", "Thêm thất bại", `${err.response.data}`);
    }
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title="Thông tin người dùng"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const userInfo = { ...newData, maNhom };
                handleAddUser(userInfo);

                resolve();
              }, 1000);
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const {
                  email,
                  hoTen,
                  maLoaiNguoiDung,
                  matKhau,
                  soDt,
                  taiKhoan,
                } = newData;
                const userInfo = {
                  email,
                  hoTen,
                  maLoaiNguoiDung,
                  matKhau,
                  soDt,
                  taiKhoan,
                  maNhom,
                };
                handleChangeUserInfo(userInfo);
                resolve();
              }, 1000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const { taiKhoan } = oldData;
                handleDeleteUserInfo(taiKhoan);
                resolve();
              }, 1000);
            }),
        }}
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 15, 20, 25],
        }}
      />
    </div>
  );
}
