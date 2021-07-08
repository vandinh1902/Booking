import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import ChildTabs from "./Children";
import { v4 as uuidv4 } from "uuid";
import bhdstarcineplex from "./../../../assets/bhdStar.png";
import cinestar from "./../../../assets/cns.jpeg";
import megags from "./../../../assets/megaGS.jpeg";
import lottecinema from "./../../../assets/lotte.jpeg";
import galaxycinema from "./../../../assets/galaxy.jpeg";
import cgv from "./../../../assets/cgv.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent !important",
    display: "flex",
    height: "500px",
    // overflow: "scroll",

    "& .MuiTabs-indicator": {
      backgroundColor: "transparent !important",
    },
    "& .MuiTabScrollButton-vertical": {
      display: "none",
    },
    "& .MuiTabs-flexContainerVertical": {
      maxHeight: "500px",
      overflowY: "overlay",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TabChild() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const cumRaps = useSelector((state) => state.MovieReducer.cumRap);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const renderRap = (link) => {
  //   let removeChar = link.split("-").join("");
  //   console.log(removeChar);
  //   let findChar = removeChar.lastIndexOf("/");
  //   console.log(findChar);
  //   let findLastDot = removeChar.lastIndexOf(".");
  //   console.log(findLastDot);
  //   let srcName = removeChar.substring(findChar + 1, findLastDot);
  //   return <img src={bhdstarcineplex} width="40px" height="40px" />;
  // };

  const renderCumRaps = () => {
    return cumRaps[0]?.lstCumRap.map((cumRap, index) => {
      return (
        <Tab
          label={
            <>
              <Grid container spacing={0}>
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={2}>
                    <img src={bhdstarcineplex} width="40px" height="40px" />
                    {/* {renderRap(cumRaps[0].logo)} */}
                  </Grid>
                  <Grid item xs={10}>
                    <Box style={{ textAlign: "left", marginLeft: "0.5rem" }}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "500" }}
                      >
                        {cumRap.tenCumRap}
                      </Typography>

                      <Typography style={{ fontSize: "10px" }}>
                        {cumRap.diaChi.length > 30
                          ? cumRap.diaChi.slice(0, 30) + "..."
                          : cumRap.diaChi}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          }
          key={index}
          {...a11yProps(Number(index))}
        />
      );
    });
  };

  const renderDanhSachPhim = () => {
    return cumRaps[0]?.lstCumRap.map((phims, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <ChildTabs phims={phims} />
        </TabPanel>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderCumRaps()}
      </Tabs>
      <div
        style={{ maxHeight: "500px", overflowY: "auto", overflowX: "hidden" }}
      >
        {renderDanhSachPhim()}
      </div>
    </div>
  );
}
