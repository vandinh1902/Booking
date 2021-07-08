import axios from "axios";
import { MA_NHOM } from "./../../../../../SystemServices";
import { DOMAIN, STATUS_CODE } from "./../../../../../utils/common/constants";
import Swal from "sweetalert2";
import history from "./../../../../../history";

export async function postThongTinDangNhapAdminApiActionApi(userInfo) {
  try {
    const result = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangNhap?${MA_NHOM}`,
      method: "POST",
      data: userInfo,
    });
    if (result.status === STATUS_CODE.SUCCESS) {
      if (result.data.maLoaiNguoiDung === "QuanTri") {
        localStorage.setItem("ADMIN", JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Chào mừng trở lại",
        }).then(function () {
          history.replace("/admin/dashboard");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Bạn không có quyền truy cập.",
        }).then(function () {
          history.replace("/");
        });
      }
    }
  } catch (err) {
    console.log(err.response);
    Swal.fire({
      icon: "error",
      title: "Sai tài khoản hoặc mật khẩu.",
    });
  }
}
