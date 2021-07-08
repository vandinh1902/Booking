import React, { useEffect, useRef } from "react";
import { Header } from "./../../components/Header";
import { Route } from "react-router-dom";
import Footer from "./../../components/Footer";
import TransitionsModal from "../../components/ModalSearchBar";
import { useDispatch, useSelector } from "react-redux";
import loading from "./../../utils/common/loading-svg/loading.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "white",
    position: "absolute",
    zIndex: "99999999998",
    top: "0%",
  },

  loading: {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    zIndex: "99999999999",
  },
}));

const LayoutHome = (props) => {
  const classes = useStyles();
  const ref = useRef(null);
  const isLoadingProfile = useSelector((state) => state.UserReducer.isLoading);
  const isLoadingHome = useSelector((state) => state.MovieReducer.isLoading);

  const renderLoading = () => {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.loading}>
          <img src={loading} />
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoadingProfile || isLoadingHome ? renderLoading() : ""}
      <Header />
      <TransitionsModal />
      {props.children}
      <Footer />
    </>
  );
  // }
};

const HomeTemplate = ({ exact, path, component }) => {
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={component} />
    </LayoutHome>
  );
};

export default HomeTemplate;
