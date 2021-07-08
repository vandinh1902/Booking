import axios from "axios";
import { DOMAIN } from "../redux/constants";
import { MA_NHOM } from "../../../../../SystemServices";

export function fetchLayDanhSachPhongVeApiAction(maCheckout) {
  return axios({
    url: `${DOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maCheckout}`,
  });
}

export function postThongTinDatVeApiAction(payload) {
  const { accessToken, datVe } = payload;
  return axios({
    url: `${DOMAIN}/QuanLyDatVe/DatVe`,
    data: datVe,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
