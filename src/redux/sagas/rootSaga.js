import { all, fork } from "@redux-saga/core/effects";
import { MovieDetailSagas } from "../../container/HomeTemplate/Detail/modules/redux/sagas";
import { MovieBigSagas } from "../../container/HomeTemplate/Home/modules/redux/sagas";
import { ChiTietPhongVeSagas } from "../../container/HomeTemplate/PhongVe/modules/redux/sagas";
import { PostThongTinDangKiDangNhapSagas } from "./../../container/HomeTemplate/Signin/modules/redux/sagas";
import { AdminSagas } from "./../../container/AdminTemplate/Dashboard/modules/sagas";

export default function* rootSaga() {
  yield all([
    ...MovieBigSagas,
    ...MovieDetailSagas,
    ...ChiTietPhongVeSagas,
    ...PostThongTinDangKiDangNhapSagas,
    ...AdminSagas,
  ]);
}
