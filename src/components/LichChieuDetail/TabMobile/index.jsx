import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_MA_HE_THONG,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
} from "../../../container/HomeTemplate/Home/modules/redux/constants";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import Details from "./Details";

export default function TabMobile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const heThongRaps = useSelector((state) => state.MovieReducer.theater);
  const maHeThongRap = useSelector((state) => state.MovieReducer.maHeThongRap);
  // const heThongRapChieu = useSelector(
  //   (state) => state.MovieReducer.movieDetailLichChieu
  // );
  const heThongRapChieu = useSelector(
    (state) => state.MovieDetailReducer.movieDetail
  );

  const renderTenCumRap = () => {
    return heThongRaps.map((heThongRap, index) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={0} className={classes.item}>
              <Grid item xs={3}>
                <img src={heThongRap.logo} width="50px" height="50px" />
              </Grid>
              <Grid item xs={9}>
                <Box className={classes.tenHeThongRap}>
                  <Typography style={{ fontSize: "14px", fontWeight: "500" }}>
                    {heThongRap.tenHeThongRap}
                  </Typography>
                </Box>
              </Grid>
              <div className={classes.hr}></div>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Details
              heThongRap={heThongRap}
              heThongRapChieu={heThongRapChieu}
            />
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div className={classes.root}>{renderTenCumRap()}</div>;
}
