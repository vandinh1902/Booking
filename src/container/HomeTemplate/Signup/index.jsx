import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import * as Yup from "yup";
import { useStyles } from "./style";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link as LinkRouter } from "react-router-dom";
import { MA_NHOM } from "../../../utils/common/constants";
import { useDispatch, useSelector } from "react-redux";
import { POST_THONG_TIN_DANG_KI_REQUESTS_SAGA } from "./../Signin/modules/redux/constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <LinkRouter color="inherit" to="/" style={{ textDecoration: "none" }}>
        ALITA
      </LinkRouter>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
  },
})(TextField);

function SignUp() {
  const dispatch = useDispatch();
  const [loginFacebookInfo, setLoginFacebookInfo] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    matKhau: "123456",
  });
  console.log(loginFacebookInfo);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: MA_NHOM,
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string("Invalid account format").required(
        "Vui lòng điền vào!"
      ),
      matKhau: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Vui lòng điền vào!"),
      hoTen: Yup.string("Invalid account format").required(
        "Vui lòng điền vào!"
      ),
      email: Yup.string()
        .email("Email không tồn tại")
        .required("Vui lòng điền vào!"),
      soDt: Yup.number()
        .typeError("Số điện thoại không hợp lệ")
        .positive("Số điện thoại không hợp lệ")
        .required("Vui lòng điền vào!"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: POST_THONG_TIN_DANG_KI_REQUESTS_SAGA,
        payload: values,
      });
    },
  });

  const responseFacebook = (response) => {
    setLoginFacebookInfo({
      isLoggedIn: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  return (
    <Box className={classes.bgColor}>
      <Box className={classes.container}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "#eeeeee",
            borderRadius: "10px",
            position: "relative",
            height: "100%",
          }}
        >
          <LinkRouter to="/" style={{ textDecoration: "none" }}>
            <Box className={classes.goBackContainer}>
              <ArrowBackIosIcon className={classes.closeIcon} />
              <Typography>Trang chủ</Typography>
            </Box>
          </LinkRouter>
          <CssBaseline />
          <div className={classes.paper}>
            <FacebookLogin
              appId="254385272976931"
              autoLoad={false}
              callback={responseFacebook}
              fields="name,email,picture"
              cssClass="my-facebook-button-class"
              scope="email, public_profile"
              render={(renderProps) => (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{
                    backgroundColor: "#1A538A",
                    padding: "0.8rem 0",
                    margin: "initial",
                    margin: "0.5rem 0",
                  }}
                  onClick={renderProps.onClick}
                >
                  Login with Facebook
                </Button>
              )}
            />
            <Grid container spacing={0}>
              <Grid item xs={5} className={classes.containerLine}>
                <hr />
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="p"
                  component="p"
                  style={{ textAlign: "center" }}
                >
                  Hoặc
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <hr />
              </Grid>
            </Grid>
            <form
              className={classes.form}
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Tên tài khoản"
                name="taiKhoan"
                autoComplete="account"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <div>{formik.errors.taiKhoan}</div>
              ) : null}

              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Mật Khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.matkhau}
              />
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <div>{formik.errors.matKhau}</div>
              ) : null}

              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="hoTen"
                label="Họ Tên"
                onChange={formik.handleChange}
                value={formik.values.hoTen}
              />
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <div>{formik.errors.hoTen}</div>
              ) : null}

              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}

              <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="soDt"
                label="Số điện thoại"
                onChange={formik.handleChange}
                value={formik.values.soDt}
              />
              {formik.touched.soDt && formik.errors.soDt ? (
                <div>{formik.errors.soDt}</div>
              ) : null}

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{
                  backgroundColor: "#000",
                  padding: "0.8rem 0",
                  margin: "initial",
                  marginBottom: "1rem",
                }}
              >
                Đăng kí
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <LinkRouter
                    to="/signin"
                    href="#"
                    variant="body2"
                    className={classes.link}
                    style={{ textDecoration: "underline" }}
                  >
                    {"Đã có tài khoản? Đăng nhập tại đây"}
                  </LinkRouter>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8} style={{ marginTop: "2.5rem", paddingBottom: "1rem" }}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
export default SignUp;
