import axios from "axios";
import { DOMAIN } from "../../../HomeTemplate/Home/modules/redux/constants";

export function postTaoLichChieuApiAction(payload) {
  const { accessToken } = JSON.parse(localStorage.getItem("ADMIN"));
  return axios({
    url: `${DOMAIN}/QuanLyDatVe/TaoLichChieu`,
    method: "POST",
    data: payload,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
