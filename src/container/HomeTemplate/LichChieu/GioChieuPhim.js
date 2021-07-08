import { Box, Typography } from "@material-ui/core";
import React from "react";
import NgayGioCollapse from "./NgayGioCollapse";

const GioChieuPhim = ({ thongTinGioNgayChieus }) => {
  // biến BigArr có nhiệm vụ khi biến arr được chạy trong vòng for gom đủ
  // số ngày trùng nhau thì nó sẽ đẩy lên bigArr
  let bigArr = [];

  // biến tmp làm cột mốc ngày để chạy vòng for so sánh với tmp
  let tmp = thongTinGioNgayChieus[0].ngayChieuGioChieu.substring(0, 10);

  // gom các số ngày trùng nhau lại
  let arr = [];

  const nestedNgay = () => {
    for (let i = 0; i < thongTinGioNgayChieus.length; i++) {
      if (thongTinGioNgayChieus[i].ngayChieuGioChieu.substring(0, 10) === tmp) {
        // so sanh giống thì push vào arr
        arr.push(thongTinGioNgayChieus[i]);
      } else {
        // sau khi phát hiện có ngày khác (vì Backend đã sắp xếp ngày) thì push các
        // ngày trùng nhau của mảng arr vào bigArr
        bigArr.push(arr);
        // reset biến arr
        arr = [];
        // sau khi reset thì tiếp tục công việc push vào mảng arr
        arr.push(thongTinGioNgayChieus[i]);
        // thay biến tmp thành biến mới để so sanh tiếp
        tmp = thongTinGioNgayChieus[i].ngayChieuGioChieu.substring(0, 10);
        // <NgayGioCollapse gio={arr} ngay={thongTinGioNgayChieus[i - 1]} />;
      }
      if (i === thongTinGioNgayChieus.length - 1) {
        // khi chạy tới cuối vòng for thì tự push các ngày còn lại trong biến arr
        // lên bigArr
        bigArr.push(arr);
      }
    }
    // sau khi chạy xong hết thì render ra giờ.
    return <NgayGioCollapse gios={bigArr} />;
  };

  return (
    <Box display="flex" style={{ flexWrap: "wrap" }}>
      {nestedNgay()}
    </Box>
  );
};

export default GioChieuPhim;
