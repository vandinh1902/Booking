import React, { useMemo, useState } from "react";
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
import { postThongTinDangNhapAdminApiActionApi } from "./modules/services/AdminLoginServices";

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

function SignInAdmin(props) {
  useMemo(() => {
    // componentWillMount events
    if (localStorage.getItem("ADMIN")) props.history.push("/admin/dashboard");
  }, []);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string("Invalid account format").required("Required!"),
      matKhau: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      postThongTinDangNhapAdminApiActionApi(values);
    },
  });

  return (
    <Box className={classes.bgColor}>
      <Box style={{ padding: "7rem 0" }}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "#eeeeee",
            borderRadius: "10px",
            position: "relative",
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
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
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
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.matkhau}
              />
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <div>{formik.errors.matKhau}</div>
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
                Đăng nhập
              </Button>
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
export default SignInAdmin;
