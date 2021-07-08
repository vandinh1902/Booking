import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Gio from "./Gio";
import galaxycinema from "./../../../assets/galaxy.jpeg";

const useStyles = makeStyles((theme) => ({
  hr: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "1px",
    color: "grey",
    backgroundColor: "#F0F0F0",
  },
}));

const Rap = ({ rapChieu, gioChieu }) => {
  const classes = useStyles();
  const renderGio = () => {
    return rapChieu?.map((rap, indexRapChieu) => {
      return gioChieu?.map((gio, indexGioChieu) => {
        if (indexRapChieu === indexGioChieu) {
          return (
            <>
              {gioChieu[indexRapChieu] && gioChieu[indexRapChieu].length > 0 ? (
                <Box key={uuidv4()}>
                  <Box
                    style={{
                      margin: "1rem 1rem 0.5rem 1rem",
                      position: "relative",
                      paddingBottom: "1.5rem",
                    }}
                    display="flex"
                    flexDirection="column"
                  >
                    <Box display="flex" style={{ marginBottom: "0.5rem" }}>
                      <img
                        src={galaxycinema}
                        width="50px"
                        height="50px"
                        style={{ borderRadius: "4px" }}
                      />
                      <Typography
                        style={{
                          fontWeight: "normal",
                          fontSize: "16px",
                          marginLeft: "1rem",
                        }}
                      >
                        {rapChieu[indexRapChieu].tenCumRap}
                      </Typography>
                    </Box>
                    <Gio gioChieu={gioChieu[indexRapChieu]} />
                    <div className={classes.hr}></div>
                  </Box>
                </Box>
              ) : (
                ""
              )}
            </>
          );
        }
      });
    });
  };

  return <div>{renderGio()}</div>;
};

export default Rap;
