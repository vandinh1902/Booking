import { useStyles } from "./styles";
import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const ModalTrailer = ({ trailer }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <PlayCircleFilledIcon />
        <Typography
          component="p"
          style={{
            fontWeight: "300",
            fontSize: "14px",
            marginTop: "5px",
          }}
        >
          Trailer
        </Typography>
      </button>
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
            <div className={classes.exitIcon} onClick={handleClose}>
              <HighlightOffIcon
                style={{
                  color: "#FAFAFA",
                  fontSize: "3rem",
                }}
              />
            </div>
            <iframe
              width="100%"
              height="100%"
              src={trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalTrailer;
