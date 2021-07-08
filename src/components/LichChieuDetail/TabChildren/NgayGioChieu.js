import React from "react";
import Gio from "./Gio";
import Rap from "./Rap";

const NgayGioChieu = ({ day, rapChieu }) => {
  const iterRapChieu = rapChieu?.map((rap) => {
    return rap.lichChieuPhim?.map((lichChieu) => {
      return lichChieu;
    });
  });

  const gioChieu = iterRapChieu?.map((gio, index) => {
    return gio.filter((ngayGio) => {
      return new Date(ngayGio.ngayChieuGioChieu).toLocaleDateString() === day;
    });
  });

  return (
    <>
      <Rap gioChieu={gioChieu} rapChieu={rapChieu} />
    </>
  );
};

export default NgayGioChieu;
