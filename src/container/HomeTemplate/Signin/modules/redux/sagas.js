import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../../../utils/common/constants";
import {
  fetchUserInfoApiActionApi,
  postThongTinDangKiApiActionApi,
  postThongTinDangNhapApiActionApi,
} from "../services/SignInSignUpService";
import {
  FETCH_USER_INFO_FAILED,
  FETCH_USER_INFO_REQUESTS,
  FETCH_USER_INFO_REQUESTS_SAGA,
  FETCH_USER_INFO_SUCCESS,
  POST_THONG_TIN_DANG_KI_REQUESTS_SAGA,
  POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS_SAGA,
  POST_THONG_TIN_DANG_NHAP_FAILED,
  POST_THONG_TIN_DANG_NHAP_REQUESTS,
  POST_THONG_TIN_DANG_NHAP_REQUESTS_SAGA,
  POST_THONG_TIN_DANG_NHAP_SUCCESS,
} from "./constants";
import history from "./../../../../../history";
import { MA_NHOM } from "../../../../../SystemServices";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const handleNoti = (icon, title, text) => {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${text}`,
  });
};

function* postThongTinDangNhapApiActionSaga({ payload }) {
  const { userInfo } = payload;
  yield put({
    type: POST_THONG_TIN_DANG_NHAP_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      postThongTinDangNhapApiActionApi,
      userInfo
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: POST_THONG_TIN_DANG_NHAP_SUCCESS,
      });
      handleNoti("success", "Đăng nhập thành công", "");
      localStorage.setItem("USER", JSON.stringify(data));
      yield call(history.push, "/");
    }
  } catch (err) {
    handleNoti("error", "Đăng nhập thất bại", `${err.response.data}`);
  }
}

function* postThongTinDangKiApiActionSaga({ payload }) {
  yield put({
    type: POST_THONG_TIN_DANG_NHAP_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      postThongTinDangKiApiActionApi,
      payload
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: POST_THONG_TIN_DANG_NHAP_SUCCESS,
      });
      Swal.fire({
        title: "Đăng kí thành công.",
        text: "Vui lòng đăng nhập",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Đăng nhập",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  } catch (err) {
    handleNoti("error", "Đăng kí thất bại", `${err.response.data}`);
  }
}

function* postThongTinDangNhapFacebookApiActionSaga({ payload }) {
  const { email: taiKhoan, matKhau } = payload;
  const userInfo = { taiKhoan, matKhau };
  yield put({
    type: POST_THONG_TIN_DANG_NHAP_REQUESTS,
  });
  try {
    const { data, status } = yield call(
      postThongTinDangNhapApiActionApi,
      userInfo
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: POST_THONG_TIN_DANG_NHAP_SUCCESS,
      });

      localStorage.setItem("USER", JSON.stringify(data));
      yield call(history.push, "/");
    }
  } catch (err) {
    const { email, name: hoTen, maLoaiNguoiDung } = payload;
    const maNhom = MA_NHOM;
    const soDt = "";
    yield put({
      type: POST_THONG_TIN_DANG_NHAP_FAILED,
      payload: err.response.data,
    });
    try {
      const userInfo = {
        taiKhoan,
        matKhau,
        email: "buigiaanfb2@gmail.com",
        soDt,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      };
      const { data, status } = yield call(
        postThongTinDangKiApiActionApi,
        userInfo
      );
      if (status === STATUS_CODE.SUCCESS) {
        const { taiKhoan, matKhau } = data;
        const userInfo = { taiKhoan, matKhau };
        yield put({
          type: POST_THONG_TIN_DANG_NHAP_REQUESTS,
        });
        try {
          const { data, status } = yield call(
            postThongTinDangNhapApiActionApi,
            userInfo
          );
          if (status === STATUS_CODE.SUCCESS) {
            yield put({
              type: POST_THONG_TIN_DANG_NHAP_SUCCESS,
            });
            localStorage.setItem("USER", JSON.stringify(data));
            yield call(history.push, "/");
          }
        } catch (err) {
          yield put({
            type: POST_THONG_TIN_DANG_NHAP_FAILED,
            payload: err.response.data,
          });
        }
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

function* fetchUserInfoApiActionSaga({ payload }) {
  yield put({
    type: FETCH_USER_INFO_REQUESTS,
  });
  try {
    const { data, status } = yield call(fetchUserInfoApiActionApi, payload);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: FETCH_USER_INFO_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: FETCH_USER_INFO_FAILED,
      payload: err.response.data,
    });
  }
}

export const PostThongTinDangKiDangNhapSagas = [
  takeLatest(
    POST_THONG_TIN_DANG_NHAP_REQUESTS_SAGA,
    postThongTinDangNhapApiActionSaga
  ),
  takeLatest(
    POST_THONG_TIN_DANG_NHAP_FACEBOOK_REQUESTS_SAGA,
    postThongTinDangNhapFacebookApiActionSaga
  ),
  takeLatest(FETCH_USER_INFO_REQUESTS_SAGA, fetchUserInfoApiActionSaga),
  takeLatest(
    POST_THONG_TIN_DANG_KI_REQUESTS_SAGA,
    postThongTinDangKiApiActionSaga
  ),
];
