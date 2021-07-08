import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import React from "react";
import logoFacebook from "./../../assets/logoFacebook.png";
import logoZalo from "./../../assets/logoZalo.png";
import bocongthuong from "./../../assets/bocongthuong.png";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <LazyLoad offset={150}>
      <div className={`${classes.root} ${classes.bgColor}`}>
        <Grid container className={classes.container}>
          <Grid container item xs={12}>
            <Grid item md={3} sm={4} xs={12} className={classes.responsive}>
              <Typography className={classes.title}>Cinema Việt Nam</Typography>
              <Box className={classes.subTitle}>
                <Typography variant="subtitle1" component="p">
                  <Link to="/gioi-thieu">
                    <Typography variant="subtitle1" component="p">
                      Giới thiệu
                    </Typography>
                  </Link>
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Tuyển dụng
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Liên hệ quảng cáo
                </Typography>
                <Typography variant="subtitle1" component="p">
                  FAQ
                </Typography>
              </Box>
            </Grid>

            <Grid md={3} item sm={4} xs={12} className={classes.responsive}>
              <Typography className={classes.title}>
                Điều khoản sử dụng
              </Typography>
              <Box className={classes.subTitle}>
                <Typography variant="subtitle1" component="p">
                  Điều khoản chung
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Điều khoản sử dụng
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Chính sách thanh toán
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Câu hỏi thường gặp
                </Typography>
              </Box>
            </Grid>

            <Grid md={3} item sm={4} xs={12} className={classes.responsive}>
              <Typography className={classes.title}>
                Kết nối với chúng tôi
              </Typography>
              <Box className={classes.subTitle}>
                <Box>
                  <img
                    src={logoFacebook}
                    width="35px"
                    style={{ borderRadius: "5px" }}
                  />
                  <img
                    src={logoZalo}
                    width="35px"
                    style={{ borderRadius: "5px", marginLeft: "1rem" }}
                  />
                </Box>
                <Box style={{ marginTop: "1rem" }}>
                  <img src={bocongthuong} width="60%" />
                </Box>
              </Box>
            </Grid>

            <Grid md={3} item sm={12} xs={12} className={classes.responsive}>
              <Typography className={classes.title}>
                Chăm sóc khách hàng
              </Typography>
              <Box className={classes.subTitle}>
                <Typography variant="subtitle1" component="p">
                  Hotline: 1900 0091
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
                </Typography>
                <Typography variant="subtitle1" component="p">
                  Email hỗ trợ: cinema@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box className={classes.footer_bg}>
          <Box className={classes.footer_bg_one}></Box>
          <Box className={classes.footer_bg_two}></Box>
        </Box>
      </div>
    </LazyLoad>
  );
};

export default Footer;
