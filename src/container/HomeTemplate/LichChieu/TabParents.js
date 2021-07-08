import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabChild from "./TabChild";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_MA_HE_THONG,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
} from "../../HomeTemplate/Home/modules/redux/constants";

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

export default function TabParents() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const heThongRaps = useSelector((state) => state.MovieReducer.theater);
  const maHeThongRap = useSelector((state) => state.MovieReducer.maHeThongRap);

  useEffect(() => {
    dispatch({
      type: FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
      payload: maHeThongRap,
    });
  }, []);

  const renderHeThongRaps = () => {
    return heThongRaps.map((heThongRap, index) => {
      return (
        <Tab
          label={<img src={heThongRap.logo} width="50px" height="50px" />}
          key={index}
          onClick={() => {
            const maHeThongRap = heThongRap.maHeThongRap;
            dispatch({
              type: FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
              payload: maHeThongRap,
            });
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.bgColor} name="lichChieuBlock">
      <div className={classes.container}>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={1}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {renderHeThongRaps()}
          </Tabs>
          <TabPanel value={1} index={1}>
            <TabChild />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
