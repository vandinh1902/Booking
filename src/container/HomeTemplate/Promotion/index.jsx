import React from "react";
import { useStyle } from "./style";
import poster1 from "../../../assets/promotion1.jpeg";
import poster2 from "../../../assets/promotion2.jpeg";
import poster3 from "../../../assets/promotion3.jpeg";
import poster4 from "../../../assets/promotion4.jpeg";
import Paper from "@material-ui/core/Paper";
import { Carousel } from "3d-react-carousal";
import { Box, Grid, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useParams } from "react-router-dom";
import tintuc1 from "./../../../assets/tintuc1.png";
import tintuc2 from "./../../../assets/tintuc2.png";
import tintuc3 from "./../../../assets/tintuc3.png";
import tintuc4 from "./../../../assets/tintuc4.png";
import tintuc5 from "./../../../assets/tintuc5.jpeg";
import tintuc6 from "./../../../assets/tintuc6.png";
import tintuc7 from "./../../../assets/tintuc7.png";
import tintuc8 from "./../../../assets/tintuc8.jpeg";
import tintuc9 from "./../../../assets/tintuc9.png";
import "./style.css";

const Promotion = (props) => {
  const classes = useStyle();
  let params = useParams();
  let slides = [
    <img src={poster1} alt="1" className={classes.img} />,
    <img src={poster2} alt="2" className={classes.img} />,
    <img src={poster3} alt="3" className={classes.img} />,
    <img src={poster4} alt="4" className={classes.img} />,
  ];

  return (
    <Box className={classes.bgColor}>
      <Box className={classes.container}>
        <Carousel slides={slides} autoplay={true} interval={5000} />
      </Box>
      <Box className={classes.containerNews}>
        <Typography className={classes.titleNews}>TIN TỨC & REVIEW</Typography>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src={tintuc1} width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src={tintuc2} width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src={tintuc3} width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src={tintuc4} width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs>
              <Box className={classes.wrapper}>
                <img src={tintuc9} width="100%" />
                <Box className={classes.wrapperText}>
                  <Typography className={classes.mainText}>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </Typography>
                  <Typography className={classes.subText}>
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default Promotion;
