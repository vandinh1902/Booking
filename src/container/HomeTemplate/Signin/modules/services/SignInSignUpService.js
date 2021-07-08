import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "./../../../../../SystemServices";

export function postThongTinDangNhapApiActionApi(userInfo) {
  return axios({
    url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: userInfo,
  });
}

export function postThongTinDangKiApiActionApi(userInfo) {
  return axios({
    url: `${DOMAIN}/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: userInfo,
  });
}

export function fetchUserInfoApiActionApi(taiKhoan) {
  return axios({
    url: `${DOMAIN}/QuanLyNguoiDung/ThongTinTaiKhoan`,
    method: "POST",
    data: { taiKhoan },
  });
}
