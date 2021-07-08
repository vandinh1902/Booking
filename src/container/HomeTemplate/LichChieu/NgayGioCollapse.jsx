import { Box, Typography } from "@material-ui/core";
import React from "react";
import Gio from "./Gio";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  titleDate: {
    padding: "0.25rem 0.5rem",
    backgroundColor: "plum",
    fontWeight: "500",
    fontSize: "14px",
    borderRadius: "4px",
  },
}));

const NgayGioCollapse = ({ gios }) => {
  const classes = useStyles();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  const formatGioNgayChieuPhim = (gios) => {
    return gios.map((gio) => {
      const gioFormat = new Date(gio[0].ngayChieuGioChieu).toLocaleDateString(
        "en-GB",
        options
      );
      return (
        <div className={classes.root} key={uuidv4()}>
          <Box style={{ minWidth: "500px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.titleDate}>
                  Ngày: {gioFormat}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Gio gios={gio} />
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      );
    });
  };

  return <div>{formatGioNgayChieuPhim(gios)}</div>;
};

export default NgayGioCollapse;
