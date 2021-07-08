import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import shout from "./../../assets/shout.svg";
import Logo2 from "./../../assets/cinema.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import login from "./../../assets/login.svg";
import { useStyles } from "./style";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import { Link as LinkScroll, Events, scrollSpy } from "react-scroll";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export const Header = () => {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const dispatch = useDispatch();
  const handleChangeModal = () => {
    dispatch({
      type: "CHANGE_MODAL_OPEN",
    });
  };

  const handleUserLogout = () => {
    localStorage.removeItem("USER");
    window.location.reload();
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const getUserNameLocal = () => {
    const localUser = JSON.parse(localStorage.getItem("USER"));
    if (localUser) {
      return (
        <Box>
          <Typography variant="h6">
            Xin chào,{" "}
            <Typography
              style={{
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {localUser.hoTen.length > 15
                ? localUser.hoTen.substring(0, 15) + "..."
                : localUser.hoTen}
            </Typography>
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
        >
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#FAFAFA" }}
          >
            <Box display="flex" justifyContent="center">
              <img src={login} width="30px" />
            </Box>
            <Typography>Đăng nhập</Typography>
          </Link>
        </Box>
      );
    }
  };

  const NavForMobile = () => {
    return (
      <div>
        <div
          className={`${openNav ? classes.wrapper : ""}`}
          onClick={() => setOpenNav(!openNav)}
        ></div>
        <div
          className={`${classes.navForMobile} ${
            openNav ? classes.activeNavForMobile : ""
          }`}
        >
          <Box className={classes.container}>
            {/* Nút đóng mở và hiện thị tên user */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box onClick={() => setOpenNav(!openNav)}>
                <MenuIcon style={{ fontSize: "2rem" }} />
              </Box>
              {getUserNameLocal()}
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Promotion */}
            <Box display="flex" alignItems="center">
              <Box>
                <img src={shout} width="30px" />
              </Box>
              <Box>
                <Link to="/promotion">
                  <Typography className={classes.titleForMobile}>
                    Khuyến mãi
                  </Typography>
                </Link>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Search */}
            <Box display="flex" alignItems="center">
              <Box className={classes.searchContainerMobile}>
                <SearchIcon style={{ fontSize: "1rem", color: "#FAFAFA" }} />
              </Box>
              <Box onClick={() => handleChangeModal()}>
                <Typography className={classes.titleForMobile}>
                  Tìm phim
                </Typography>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Profile */}
            {localStorage.getItem("USER") ? (
              <Link to="/profile">
                <Box display="flex" alignItems="center">
                  <Box>
                    <AccountBoxIcon
                      style={{ fontSize: "2rem", color: "#fff" }}
                    />
                  </Box>
                  <Box>
                    <Typography className={classes.titleForMobile}>
                      Thông tin cá nhân
                    </Typography>
                  </Box>
                </Box>
                <hr color="#585858" />
              </Link>
            ) : (
              ""
            )}
            {/* //*/}

            {/* Logout */}
            {localStorage.getItem("USER") ? (
              <Box
                display="flex"
                alignItems="center"
                onClick={() => handleUserLogout()}
              >
                <Box>
                  <img src={login} width="30px" />
                </Box>
                <Box>
                  <Typography className={classes.titleForMobile}>
                    Đăng xuất
                  </Typography>
                </Box>
                <hr color="#585858" />
              </Box>
            ) : (
              ""
            )}
            {/* //*/}
          </Box>
        </div>
      </div>
    );
  };

  const renderUserWelcome = () => {
    if (localStorage.getItem("USER")) {
      const localUser = JSON.parse(localStorage.getItem("USER"));
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
          onClick={handleClick}
        >
          <Box textAlign="center">
            <Typography style={{ cursor: "pointer" }}>
              Xin chào,{" "}
              <Typography
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {localUser.hoTen.length > 15
                  ? localUser.hoTen.substring(0, 15) + "..."
                  : localUser.hoTen}
                <ArrowDropDownIcon style={{ display: "inline-block" }} />
              </Typography>
            </Typography>
          </Box>
          <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                  <Box>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <Typography className={classes.settingsTextPopper}>
                        Thông tin cá nhân
                      </Typography>
                    </Link>
                  </Box>
                  <Box onClick={() => handleUserLogout()}>
                    <Typography className={classes.settingsTextPopper}>
                      Đăng xuất
                    </Typography>
                  </Box>
                </div>
              </Fade>
            )}
          </Popper>
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
        >
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#FAFAFA" }}
          >
            <Box display="flex" justifyContent="center">
              <img src={login} width="30px" />
            </Box>
            <Typography>Đăng nhập</Typography>
          </Link>
        </Box>
      );
    }
  };

  return (
    <>
      {NavForMobile()}
      <div className={`${classes.root}`}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Box>
              {window.location.pathname == "/" ? (
                <LinkScroll
                  to="homeBlock"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  style={{
                    textDecoration: "none",
                    color: "#FAFAFA",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <img className={classes.logo} src={Logo2} />
                  </div>
                </LinkScroll>
              ) : (
                <Link to="">
                  <img className={classes.logo} src={Logo2} />
                </Link>
              )}
            </Box>
            <Box variant="h6" className={classes.title}>
              <Box style={{ margin: "0 1rem" }}>
                <Link
                  to="/promotion"
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    {/* <img src={shout} width="30px" /> */}
                    <Typography>Khuyến mãi</Typography>
                  </Box>
                </Link>
              </Box>
              <Box style={{ margin: "0 1rem", cursor: "pointer" }}>
                <LinkScroll
                  to="phimBlock"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    <Typography>Phim</Typography>
                  </Box>
                </LinkScroll>
              </Box>
              <Box style={{ margin: "0 1rem", cursor: "pointer" }}>
                <LinkScroll
                  to="lichChieuBlock"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={1000}
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    <Typography>Lịch chiếu</Typography>
                  </Box>
                </LinkScroll>
              </Box>
              <Box style={{ margin: "0 1rem", cursor: "pointer" }}>
                <LinkScroll
                  to="appBlock"
                  spy={true}
                  smooth={true}
                  offset={-25}
                  duration={1000}
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    <Typography>Ứng dụng</Typography>
                  </Box>
                </LinkScroll>
              </Box>
            </Box>

            <Box>
              <Box className={classes.hideOnMobile}>{renderUserWelcome()}</Box>
              <Box
                onClick={() => setOpenNav(!openNav)}
                className={classes.hideOnDesktop}
              >
                <MenuIcon />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
