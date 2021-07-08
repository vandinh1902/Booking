import React from "react";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const BookedTicket = ({ thongTin, stt }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const optionsDate = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const optionsTime = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date(thongTin.ngayDat).toLocaleDateString(
    "en-GB",
    optionsDate
  );
  const time = new Date(thongTin.ngayDat).toLocaleTimeString(
    "en-GB",
    optionsTime
  );

  const renderBookedTicket = () => {
    return thongTin.danhSachGhe.map((danhSach) => {
      return danhSach;
    });
  };

  const rows = renderBookedTicket();

  return (
    <>
      {/* <tr>
        <td>{stt}</td>
        <td>{thongTin.tenPhim}</td>
        <td>
          <Box onClick={handleOpen} style={{ cursor: "pointer" }}>
            <Typography>[Chi tiết]</Typography>
          </Box>
        </td>
        <td>{`${date} - ${time}`}</td>
        <td>{thongTin.giaVe} vnđ</td>
      </tr> */}
      <TableRow key={stt}>
        <TableCell component="th" scope="row">
          {stt}
        </TableCell>
        <TableCell component="th" scope="row">
          {thongTin.tenPhim}
        </TableCell>
        <TableCell>
          <Box>
            <Box onClick={handleOpen} style={{ cursor: "pointer" }}>
              <Typography>[Chi tiết]</Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell>{`${date} - ${time}`}</TableCell>
        <TableCell>{thongTin.giaVe} vnđ</TableCell>
      </TableRow>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <table
              style={{
                width: "100%",
                // borderCollapse: "collapse",
                display: "block",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
              className="table"
            >
              <thead
                class="thead-dark"
                style={{ display: "table", width: "100%", textAlign: "center" }}
              >
                <tr>
                  <th scope="col" style={{ padding: "1rem 1.5rem" }}>
                    Tên hệ thống rạp
                  </th>
                  <th scope="col" style={{ padding: "1rem 1.5rem" }}>
                    Tên rạp
                  </th>
                  <th scope="col" style={{ padding: "1rem 1.5rem" }}>
                    Số ghế
                  </th>
                </tr>
              </thead>
              <tbody style={{ display: "table", width: "100%" }}>
                {renderBookedTicket()}
              </tbody>
            </table> */}
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên hệ thống rạp</TableCell>
                    <TableCell>Tên rạp</TableCell>
                    <TableCell>Số ghế</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.tenHeThongRap}
                      </TableCell>
                      <TableCell>{row.tenCumRap}</TableCell>
                      <TableCell>{row.tenGhe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default BookedTicket;
