import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Swal from "sweetalert2";
import axios from "axios";
import { DOMAIN, STATUS_CODE } from "../../../../../utils/common/constants";
import { CLEAN_UP_USER_INFO } from "../../../Signin/modules/redux/constants";

const UserInfo = ({ userInfo }) => {
  const classes = useStyles();
  const { maLoaiNguoiDung, accessToken } = JSON.parse(
    localStorage.getItem("USER")
  );
  const [userField, setUserField] = useState({
    taiKhoan: userInfo.taiKhoan,
    maLoaiNguoiDung,
    maNhom: userInfo.maNhom,
  });

  useEffect(() => {
    userField.hoTen = userInfo.hoTen;
    userField.matKhau = userInfo.matKhau;
    userField.soDT = userInfo.soDT;
    userField.email = userInfo.email;
  }, []);

  if (!userInfo) {
    return null;
  }

  const handleNoti = (icon, title, text) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
    }).then(function () {
      window.location.reload();
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserField({
      ...userField,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: userField,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (result.status === STATUS_CODE.SUCCESS) {
        handleNoti("success", "Cập nhật thành công", "");
      }
    } catch (err) {
      handleNoti("error", "Cập nhật thất bại", `${err.response.data}`);
    }
  };

  return (
    <Box className={classes.borderTest}>
      <Box>
        <Typography className={classes.titleText}>Hồ Sơ Của Tôi</Typography>
        <Typography className={classes.titleSpanText}>
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </Typography>
      </Box>
      <hr />
      <Box>
        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12} className={classes.centerAll}>
            <Typography className={classes.textFieldMain}>
              Tên đăng nhập
            </Typography>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <TextField
              disabled
              size="small"
              id="outlined-basic"
              variant="outlined"
              defaultValue={userInfo && userInfo.taiKhoan}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12} className={classes.centerAll}>
            <Typography className={classes.textFieldMain}>Mật khẩu</Typography>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              fullWidth
              name="matKhau"
              type="password"
              defaultValue={userInfo && userInfo.matKhau}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12} className={classes.centerAll}>
            <Typography className={classes.textFieldMain}>Tên</Typography>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              name="hoTen"
              fullWidth
              defaultValue={userInfo && userInfo.hoTen}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12} className={classes.centerAll}>
            <Typography className={classes.textFieldMain}>Email</Typography>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              name="email"
              fullWidth
              defaultValue={userInfo && userInfo.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12} className={classes.centerAll}>
            <Typography className={classes.textFieldMain}>
              Số Điện Thoại
            </Typography>
          </Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              name="soDT"
              type="number"
              fullWidth
              defaultValue={userInfo && userInfo.soDT}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.inputContainer}>
          <Grid item md={2} sm={3} xs={12}></Grid>
          <Grid item md={9} sm={8} xs={12} className={classes.centerAll}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Lưu
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserInfo;
