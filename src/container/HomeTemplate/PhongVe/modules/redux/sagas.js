import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../../../utils/common/constants";
import {
  fetchLayDanhSachPhongVeApiAction,
  postThongTinDatVeApiAction,
} from "../services/CheckoutService";
import Swal from "sweetalert2";

import {
  FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
  FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
  POST_THONG_TIN_DAT_VE_REQUESTS_SAGA,
} from "./constants";
import history from "./../../../../../history";

function* fetchLayDanhSachPhongVeActionSaga({ payload }) {
  yield put({
    type: FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      fetchLayDanhSachPhongVeApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
      payload: err.response.data,
    });
  }
}

const handleNoti = (icon, title, text) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
};

function* postThongTinDatVeActionSaga({ payload }) {
  try {
    const { data, status } = yield call(postThongTinDatVeApiAction, payload);
    if (status === STATUS_CODE.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Đặt vé thành công",
        text: "Vui lòng kiểm tra email và số điện thoại để lấy mã!",
      });
      yield call(history.push, "/");
    }
  } catch (err) {
    handleNoti("error", "Đặt vé thất bại", `${err.response.data}`);
  }
}

export const ChiTietPhongVeSagas = [
  takeLatest(
    FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA,
    fetchLayDanhSachPhongVeActionSaga
  ),
  takeLatest(POST_THONG_TIN_DAT_VE_REQUESTS_SAGA, postThongTinDatVeActionSaga),
];
