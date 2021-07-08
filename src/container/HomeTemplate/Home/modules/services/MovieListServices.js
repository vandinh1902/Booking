import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "./../../../../../SystemServices";

export function fetchMovieApiAction() {
  return axios({
    url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`,
    method: "GET",
  });
}

export function fetchLayThongTinHeThongRapApiAction() {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
}

export function fetchLayThongTinLichChieuHeThongRapApiAction(maHeThongRap) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${MA_NHOM}`,
  });
}

export function fetchLayThongTinCumRapTheoHeThongApiAction(maHeThongRap) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
  });
}

export function fetchLayThongTinLichChieuPhimApiAction(maPhim) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
  });
}
