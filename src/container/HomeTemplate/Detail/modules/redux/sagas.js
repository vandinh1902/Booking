import { call, put, takeLatest, takeEvery } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../../../utils/common/constants";
import {
  fetchMovieDetailApiAction,
  fetchUsersCommentApiAction,
  postUsersCommentApiAction,
} from "../services/MovieDetailService";
import {
  FETCH_THONG_TIN_PHIM_REQUESTS_SAGA,
  FETCH_THONG_TIN_PHIM_FAILED,
  FETCH_THONG_TIN_PHIM_REQUESTS,
  FETCH_THONG_TIN_PHIM_SUCCESS,
  FETCH_USERS_COMMENT_REQUESTED,
  FETCH_USERS_COMMENT_REQUESTS_SAGA,
  FETCH_USERS_COMMENT_SUCCESS,
  FETCH_USERS_COMMENT_FAILED,
  POST_USERS_COMMENT_REQUESTS_SAGA,
} from "./constants";

function* fetchDetailMovieApiActionSaga({ maPhim }) {
  yield put({
    type: FETCH_THONG_TIN_PHIM_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchMovieDetailApiAction, maPhim);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_THONG_TIN_PHIM_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_THONG_TIN_PHIM_FAILED,
      payload: err.response.data,
    });
  }
}

function* fetchUsersCommentApiActionSaga() {
  yield put({
    type: FETCH_USERS_COMMENT_REQUESTED,
  });
  try {
    const { data, status } = yield call(fetchUsersCommentApiAction);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_USERS_COMMENT_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_USERS_COMMENT_FAILED,
      payload: err.response.data,
    });
  }
}

function* postUsersCommentApiActionSaga({ payload }) {
  try {
    const { hoTen } = JSON.parse(localStorage.getItem("USER"));
    const { binhLuan, rating: danhGiaFake, luotThich } = payload;
    let danhGia = danhGiaFake * 2;
    const dataComment = { binhLuan, danhGia, luotThich, hoTen };
    const { data, status } = yield call(postUsersCommentApiAction, dataComment);
    if (status === STATUS_CODE.CREATED) {
      yield call(fetchUsersCommentApiActionSaga);
    }
  } catch (err) {
    console.log(err.response.data);
  }
}

export const MovieDetailSagas = [
  takeLatest(FETCH_THONG_TIN_PHIM_REQUESTS_SAGA, fetchDetailMovieApiActionSaga),
  takeLatest(FETCH_USERS_COMMENT_REQUESTS_SAGA, fetchUsersCommentApiActionSaga),
  takeLatest(POST_USERS_COMMENT_REQUESTS_SAGA, postUsersCommentApiActionSaga),
];
