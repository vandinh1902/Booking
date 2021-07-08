import React from "react";
import { useStyles } from "./styles";
import popcorn from "./../../../../assets/popcorn.png";
import { Box, Grid, Typography } from "@material-ui/core";
import { combos } from "./ComboType/dataCombo";
import { useSelector, useDispatch } from "react-redux";
import ComboType from "./ComboType";
import { v4 as uuidv4 } from "uuid";

const Combo = ({ comboStatus }) => {
  const classes = useStyles();
  const combos = useSelector((state) => state.PhongVeReducer?.combosData);

  const renderComboType = () => {
    return combos?.map((combo) => {
      return <ComboType combo={combo} key={uuidv4()} />;
    });
  };
  return (
    <div
      className={`${classes.combo} ${comboStatus ? classes.activeCombo : ""}`}
    >
      <div style={{ padding: "1rem" }}>
        <h3 style={{ textAlign: "center" }}>Đồ ăn, thức uống</h3>
        <hr />
        <div>
          <div className={classes.root}>{renderComboType()}</div>
        </div>
      </div>
    </div>
  );
};

export default Combo;
