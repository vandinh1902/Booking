import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_HE_THONG_RAP_FAILED,
  FETCH_HE_THONG_RAP_SUCCESS,
  // FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_REQUESTS_SAGA,
  FETCH_MOVIES_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_REQUESTS,
  FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_FAILED,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_FAILED,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_FAILED,
  FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA,
  FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
} from "./constants";
import { STATUS_CODE } from "./../../../../../utils/common/constants";
import {
  fetchLayThongTinCumRapTheoHeThongApiAction,
  fetchLayThongTinHeThongRapApiAction,
  fetchLayThongTinLichChieuHeThongRapApiAction,
  fetchLayThongTinLichChieuPhimApiAction,
  fetchMovieApiAction,
} from "../services/MovieListServices";

function* fetchMovieApiActionSaga() {
  yield put({
    type: FETCH_MOVIES_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchMovieApiAction);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_MOVIES_FAILED,
      payload: err,
    });
  }
}

function* fetchRapApiActionSaga() {
  yield put({
    type: FETCH_MOVIES_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchLayThongTinHeThongRapApiAction);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_HE_THONG_RAP_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_HE_THONG_RAP_FAILED,
    });
  }
}

function* fetchLayThongTinLichChieuHeThongRapApiActionSaga({ payload }) {
  // yield put({
  //   type: FETCH_THONG_TIN_LICH_CHIEU_REQUESTS,
  // });
  try {
    const { data, status } = yield call(
      fetchLayThongTinLichChieuHeThongRapApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_LICH_CHIEU_FAILED,
    });
  }
}

function* fetchLayThongTinLichChieuPhimApiActionSaga({ payload }) {
  try {
    const { data, status } = yield call(
      fetchLayThongTinLichChieuPhimApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_FAILED,
    });
  }
}

function* fetchLayThongTinLichChieuPhimTabsApiActionSaga({ payload }) {
  try {
    const { data, status } = yield call(
      fetchLayThongTinLichChieuPhimApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_FAILED,
    });
  }
}

function* fetchLayThongTinCumRapTheoHeThongApiActionSaga({ payload }) {
  try {
    const { data, status } = yield call(
      fetchLayThongTinCumRapTheoHeThongApiAction,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err.response.data);
  }
}

export const MovieBigSagas = [
  takeLatest(FETCH_MOVIES_REQUESTS_SAGA, fetchMovieApiActionSaga),
  takeLatest(
    FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
    fetchRapApiActionSaga
  ),
  takeEvery(
    FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
    fetchLayThongTinLichChieuHeThongRapApiActionSaga
  ),
  takeLatest(
    FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA,
    fetchLayThongTinLichChieuPhimApiActionSaga
  ),
  takeLatest(
    FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA,
    fetchLayThongTinLichChieuPhimTabsApiActionSaga
  ),
  takeLatest(
    FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA,
    fetchLayThongTinCumRapTheoHeThongApiActionSaga
  ),
];
