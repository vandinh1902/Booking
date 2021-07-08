import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import { useStyles } from "./styles";
import avatar from "./../../../assets/tenet.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ReceiptIcon from "@material-ui/icons/Receipt";
import UserInfo from "./contents/UserInfo";
import History from "./contents/History";
import {
  CLEAN_UP_USER_INFO,
  FETCH_USER_INFO_REQUESTS_SAGA,
} from "./../Signin/modules/redux/constants";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { MA_NHOM } from "./../../../utils/common/constants";

const UserProfile = (props) => {
  const maNhom = MA_NHOM;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [changeTabs, setChangeTabs] = useState("UserInfo");
  const userInfo = useSelector((state) => state.UserReducer.thongTinUser);
  const isLoading = useSelector((state) => state.UserReducer.isLoading);
  let { hoTen } = JSON.parse(localStorage.getItem("USER"));

  useMemo(() => {
    if (!localStorage.getItem("USER")) {
      props.history.push("/");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("USER")) {
      let { taiKhoan } = JSON.parse(localStorage.getItem("USER"));
      dispatch({
        type: FETCH_USER_INFO_REQUESTS_SAGA,
        payload: taiKhoan,
      });
    }
    return () => {
      dispatch({
        type: CLEAN_UP_USER_INFO,
      });
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div style={{ height: "100vh", position: "absolute", zIndex: "" }}></div>
  //   );
  // }

  if (!userInfo) {
    return null;
  }

  return (
    <>
      <div className={classes.bgColor}>
        <div className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item md={3} sm={12} xs={12}>
                <Box className={classes.borderTest}>
                  {/*User avatar */}
                  <Box display="flex">
                    <img
                      src={`https://i.pravatar.cc/150/?u=${hoTen}`}
                      className={classes.img}
                    />
                    <Box className={classes.nameAvatarBox}>
                      <Typography className={classes.nameUser}>
                        {userInfo.hoTen}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        style={{ cursor: "pointer" }}
                        onClick={() => setChangeTabs("UserInfo")}
                      >
                        <EditIcon style={{ fontSize: "14px" }} />
                        <Typography className={classes.editHoSo}>
                          Sửa hồ sơ
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <hr />
                  {/*Chức năng */}
                  <Box className={classes.boxContainerMenuItems}>
                    <Box
                      className={classes.menuItems}
                      onClick={() => setChangeTabs("UserInfo")}
                    >
                      <AccountCircleIcon
                        className={classes.iconMenuItems}
                        style={{ color: "#EE4D2D" }}
                      />
                      <Typography className={classes.menuItemsText}>
                        Tài khoản của tôi
                      </Typography>
                    </Box>
                    <Box
                      className={classes.menuItems}
                      onClick={() => setChangeTabs("History")}
                    >
                      <ReceiptIcon
                        className={classes.iconMenuItems}
                        style={{ color: "#44B5FF" }}
                      />
                      <Typography className={classes.menuItemsText}>
                        Lịch sử đặt vé
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={9} sm={12} xs={12}>
                {changeTabs === "UserInfo" ? (
                  <UserInfo userInfo={userInfo} />
                ) : (
                  <History userInfo={userInfo} />
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
