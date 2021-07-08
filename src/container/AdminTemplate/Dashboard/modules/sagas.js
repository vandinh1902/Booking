import { call, delay, put, takeLatest } from "redux-saga/effects";
import { STATUS_CODE } from "../../../../utils/common/constants";
import { postTaoLichChieuApiAction } from "../services/AdminServices";
import {
  POST_TAO_LICH_CHIEU_FAILED,
  POST_TAO_LICH_CHIEU_REQUESTED,
  POST_TAO_LICH_CHIEU_REQUESTED_SAGA,
  POST_TAO_LICH_CHIEU_SUCCEED,
} from "./constants";
import Swal from "sweetalert2";

const handleNoti = (icon, title, text) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
};

function* postTaoLichChieuApiActionSaga({ payload }) {
  try {
    const { data, status } = yield call(postTaoLichChieuApiAction, payload);
    if (status === STATUS_CODE.SUCCESS) {
      handleNoti("success", "Tạo lịch chiếu thành công", "Nice");
    }
  } catch (err) {
    handleNoti("error", "Tạo lịch chiếu thất bại", `${err.response.data}`);
  }
}

export const AdminSagas = [
  takeLatest(POST_TAO_LICH_CHIEU_REQUESTED_SAGA, postTaoLichChieuApiActionSaga),
];
