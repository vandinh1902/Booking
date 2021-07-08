import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabChildren from "../TabChildren";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_MA_HE_THONG,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
} from "../../../container/HomeTemplate/Home/modules/redux/constants";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core";
import TabMobile from "../TabMobile";
import { useMediaQuery } from "react-responsive";

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
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    color: "#000",
    width: "670px",
    height: "670px",
    borderRadius: "5px",
    padding: "1rem 0",

    "& .MuiBox-root": {
      padding: "0rem",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  item: {
    position: "relative",
    padding: "0.25rem 0",
  },

  hr: {
    position: "absolute",
    bottom: "-10%",
    left: "0",
    width: "100%",
    height: "1px",
    color: "grey",
    backgroundColor: "#F0F0F0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  tenHeThongRap: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  forXs: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export default function TabContainer() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const heThongRaps = useSelector((state) => state.MovieReducer.theater);
  const maHeThongRap = useSelector((state) => state.MovieReducer.maHeThongRap);

  useEffect(() => {
    dispatch({
      type: FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
      payload: maHeThongRap,
    });
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderHeThongRaps = () => {
    return heThongRaps.map((heThongRap, index) => {
      return (
        <Tab
          key={uuidv4()}
          label={
            <Grid container spacing={0} className={classes.item}>
              <Grid item md={4} sm={9}>
                <img src={heThongRap.logo} width="50px" height="50px" />
              </Grid>
              <Grid item md={8} className={classes.tenHeThongRap}>
                <Typography style={{ fontSize: "14px", fontWeight: "500" }}>
                  {heThongRap.tenHeThongRap}
                </Typography>
              </Grid>
              <div className={classes.hr}></div>
            </Grid>
          }
          onClick={() => {
            const maHeThongRap = heThongRap.maHeThongRap;
            dispatch({
              type: CHANGE_MA_HE_THONG,
              payload: maHeThongRap,
            });
          }}
          {...a11yProps(Number(index))}
        />
      );
    });
  };

  return (
    <>
      {isMobile ? (
        <div className={classes.forXs}>
          <TabMobile />
        </div>
      ) : (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item md={3} sm={2}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{
                  style: { backgroundColor: "rgb(236,70,248)" },
                }}
              >
                {renderHeThongRaps()}
              </Tabs>
            </Grid>
            <TabPanel container item md={9} sm={10}>
              <TabPanel value={1} index={1}>
                <TabChildren />
              </TabPanel>
            </TabPanel>
          </Grid>
        </div>
      )}
    </>
  );
}
