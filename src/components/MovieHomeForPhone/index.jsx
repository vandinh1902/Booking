import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Button } from "@material-ui/core";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import GradeIcon from "@material-ui/icons/Grade";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Divider } from "material-ui";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const MovieHomeForPhone = ({ movieList }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(5);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let arr = [...movieList].slice(0).reverse();

  const renderStarMovie = (danhGia) => {
    let arr = [];
    let test = <GradeIcon className={classes.star} />;
    let half = (
      <>
        <GradeIcon className={classes.star} />
        <StarHalfIcon className={classes.star} />
      </>
    );

    if (danhGia.danhGia > 1) {
      let checkStar;
      if (danhGia.danhGia % 2 == 0) {
        checkStar = danhGia.danhGia / 2;
        for (let i = 0; i < checkStar; i++) {
          arr.push(test);
        }
      } else {
        checkStar = (danhGia.danhGia - 1) / 2;
        for (let i = 0; i < checkStar; i++) {
          i === checkStar - 1 ? arr.push(half) : arr.push(test);
        }
      }
      return arr.map((value) => {
        return value;
      });
    } else return <StarHalfIcon className={classes.star} />;
  };

  const renderMovie = () => {
    return arr.slice(0, limit).map((movie) => {
      return (
        <Link to={`movie/${movie.biDanh}${movie.maPhim}`}>
          <div className={classes.wrapperItem}>
            <img src={movie.hinhAnh} width="100%" className={classes.img} />
            <div className={classes.c18}>
              <p style={{ margin: "0" }}>C18</p>
            </div>
            <div
              className={classes.danhGia}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <p style={{ margin: "0", textAlign: "center" }}>
                {movie.danhGia}
              </p>
              <Box style={{ lineHeight: "3%" }}>{renderStarMovie(movie)}</Box>
            </div>
          </div>
        </Link>
      );
    });
  };

  const renderMovieComing = () => {
    return movieList.slice(0, limit).map((movie) => {
      return (
        <Link to={`movie/${movie.biDanh}${movie.maPhim}`}>
          <div className={classes.wrapperItem}>
            <img src={movie.hinhAnh} width="100%" className={classes.img} />
            <div className={classes.c18}>
              <p style={{ margin: "0" }}>C18</p>
            </div>
            <div
              className={classes.danhGia}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <p style={{ margin: "0", textAlign: "center" }}>
                {movie.danhGia}
              </p>
              <Box style={{ lineHeight: "3%" }}>{renderStarMovie(movie)}</Box>
            </div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div className={classes.containerMobile}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.bgNavTab}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Đang chiếu" {...a11yProps(0)} />
            <Tab label="Sắp chiếu" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {renderMovie()}
            <Box display="flex" justifyContent="center">
              <Button
                style={{
                  padding: "7px 25px",
                  color: "#FAFAFA",
                  fontSize: "14px",
                  backgroundColor: "plum",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
                onClick={() => setLimit(limit + 5)}
              >
                Xem thêm
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {renderMovieComing()}
            <Box display="flex" justifyContent="center">
              <Button
                style={{
                  padding: "7px 25px",
                  color: "#FAFAFA",
                  fontSize: "14px",
                  backgroundColor: "plum",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
                onClick={() => setLimit(limit + 5)}
              >
                Xem thêm
              </Button>
            </Box>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default MovieHomeForPhone;
