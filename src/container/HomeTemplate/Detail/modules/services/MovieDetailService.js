import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "./../../../../../SystemServices";

export function fetchMovieDetailApiAction(maPhim) {
  return axios({
    url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
  });
}

export function fetchUsersCommentApiAction() {
  return axios({
    url: `https://60865c3bd14a870017579260.mockapi.io/comment/comments`,
    method: "GET",
  });
}

export function postUsersCommentApiAction(data) {
  return axios({
    url: `https://60865c3bd14a870017579260.mockapi.io/comment/comments`,
    method: "POST",
    data,
  });
}
