import React from "react";
import Slider from "react-slick";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Typography } from "@material-ui/core";
import mobile from "./../../assets/mobile.png";
import slideMobileApp1 from "./../../assets/slideMobileApp1.jpeg";
import slideMobileApp2 from "./../../assets/slideMobileApp2.jpeg";
import slideMobileApp3 from "./../../assets/slideMobileApp3.jpeg";
import slideMobileApp4 from "./../../assets/slideMobileApp4.jpeg";

const HomeApp = () => {
  const classes = useStyles();
  const settings = {
    className: "slickList",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={classes.bgColor} name="appBlock">
      <div className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item md={6} sm={12} xs={12}>
              <Box className={classes.left}>
                <Box>
                  <Typography variant="h4" style={{ fontWeight: "500" }}>
                    Ứng dụng tiện lợi dành cho
                  </Typography>
                  <Typography variant="h4" style={{ fontWeight: "500" }}>
                    người yêu điện ảnh
                  </Typography>
                  <Typography style={{ fontSize: "18px", margin: "1.7rem 0" }}>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </Typography>
                  <Box style={{ width: "100%" }}>
                    <Button variant="contained" className={classes.button}>
                      App miễn phí - Tải về ngay!
                    </Button>
                    <Typography
                      style={{ fontSize: "14px", marginBottom: "1rem" }}
                    >
                      TIX có hai phiên bản iOS & Android
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box className={classes.right}>
                <img
                  className={`${classes.imgResponsive} ${classes.phoneImg}`}
                  src={mobile}
                  alt="Loading..."
                />
                <div className={classes.sliderScreen}>
                  <Slider {...settings}>
                    <img src={slideMobileApp1} width="100%" />
                    <img src={slideMobileApp2} width="100%" />
                    <img src={slideMobileApp3} width="100%" />
                    <img src={slideMobileApp4} width="100%" />
                  </Slider>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
