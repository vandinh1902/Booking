import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Grid } from "@material-ui/core";
import GioChieuPhim from "./GioChieuPhim";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
    },

    "& .MuiAccordionDetails-root": {
      overflowY: "auto",
    },

    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },

    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },

    // "& .MuiAccordionSummary-root": {
    //   position: "relative",
    //   "&:before": {
    //     content: '""',
    //     position: "absolute",
    //     bottom: 0,
    //     left: "2.5%",
    //     width: "95%",
    //     height: "1px",
    //     display: "block",
    //     background: "#d4d4d4",
    //   },
    // },
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  c18: {
    fontSize: "12px",
    fontWeight: "400",
    backgroundColor: "#FB4226",
    padding: "0.1rem 0.3rem",
    color: "#fff",
    display: "inline-block",
    borderRadius: "4px",
  },

  title: {
    display: "inline-block",
    fontWeight: "500",
    marginLeft: "0.5rem",
    fontSize: "15px",
  },

  description: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#9B9B9B",
  },
}));

export default function ChildTabs({ phims }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderThongTinPhim = (phims) => {
    return phims.danhSachPhim.map((thongTinPhim, index) => {
      return (
        <Accordion
          key={uuidv4()}
          classes={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={0}>
                <Box display="flex">
                  <img
                    src={thongTinPhim.hinhAnh}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "4px" }}
                  />
                  <Box style={{ marginLeft: "0.8rem" }}>
                    <Typography className={classes.c18}>C18</Typography>
                    <Typography className={classes.title}>
                      {thongTinPhim.tenPhim}
                    </Typography>
                    <Typography className={classes.description}>
                      100 phút - TIX 8.1 - IMDb 0
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <GioChieuPhim
              thongTinGioNgayChieus={thongTinPhim.lstLichChieuTheoPhim}
            />
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return (
    <div className={classes.root}>
      {/* <Box style={{ minWidth: "600px" }}> */}
      <Box style={{ width: "580px" }}>{renderThongTinPhim(phims)}</Box>
    </div>
  );
}
