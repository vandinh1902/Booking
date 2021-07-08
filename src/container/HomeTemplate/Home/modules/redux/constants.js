// DOMAIN
export const DOMAIN = `https://movie0706.cybersoft.edu.vn/api`;

/* Action từ Component request lên SAGA */
//Lấy tất cả các phim
export const FETCH_MOVIES_REQUESTS_SAGA =
  "fetch_movies/FETCH_MOVIES_REQUESTS_SAGA";

//Thông tin các rạp chiếu BDH Star, Lotte,....
export const FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA =
  "fetch_rap/FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA";

//Thông tin các chi nhanh của các Rạp
// export const FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA =
//   "fetch_rap/FETCH_LAY_THONG_TIN_CUM_THONG_RAP_REQUESTS_SAGA";

//Thông tin lịch chiếu hệ thống rạp
export const FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA =
  "fetch_rap/FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA";

/*Action đẩy lên thẳng Reducer (Không bất đồng bộ)*/
export const CHANGE_MA_HE_THONG = "CHANGE_MA_HE_THONG";

//Lấy thông tin lịch chiếu phim (SearchModalComponent)
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA =
  "fetch_thong_tin_lich_chieu_phim/FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS_SAGA";

//Lấy thông tin cụm rạp theo hệ thống rap (Quản lí lịch chiếu admin)
export const FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA =
  "fetch_thong_tin_cum_rap/FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_REQUESTS_SAGA";

export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA =
  "fetch_thong_tin_lich_chieu_phim_tabs/FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA";

/*Action từ SAGA request lên Reducer */
//Trạng thái lấy phim
export const FETCH_MOVIES_REQUESTS = "fetch_movies/FETCH_MOVIES_REQUESTS";
export const FETCH_MOVIES_SUCCESS = "fetch_movies/FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILED = "fetch_movies/FETCH_MOVIES_FAILED";

//Trạng thái lấy hệ thống rạp BDH Star, Lotte,...
export const FETCH_HE_THONG_RAP_REQUESTS =
  "fetch_rap/FETCH_HE_THONG_RAP_REQUESTS";
export const FETCH_HE_THONG_RAP_SUCCESS =
  "fetch_rap/FETCH_HE_THONG_RAP_SUCCESS";
export const FETCH_HE_THONG_RAP_FAILED = "fetch_rap/FETCH_HE_THONG_RAP_FAILED";

//Trạng thái lấy thông tin lịch chiếu hệ thống rạp.
export const FETCH_THONG_TIN_LICH_CHIEU_REQUESTS =
  "fetch_rap/FETCH_THONG_TIN_LICH_CHIEU_REQUESTS";
export const FETCH_THONG_TIN_LICH_CHIEU_SUCCESS =
  "fetch_rap/FETCH_THONG_TIN_LICH_CHIEU_SUCCESS";
export const FETCH_THONG_TIN_LICH_CHIEU_FAILED =
  "fetch_rap/FETCH_THONG_TIN_LICH_CHIEU_FAILED";

//Trạng thái lấy thông tin lịch chiếu phim (SearchModalComponent)
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS =
  "fetch_thong_tin_lich_chieu_phim/FETCH_THONG_TIN_LICH_CHIEU_PHIM_REQUESTS";
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS =
  "fetch_thong_tin_lich_chieu_phim/FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS";
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_FAILED =
  "fetch_thong_tin_lich_chieu_phim/FETCH_THONG_TIN_LICH_CHIEU_PHIM_FAILED";

//Trạng thái lấy thông tin lịch chiếu phim cho tabs (Detail Movie Component)
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS =
  "fetch_thong_tin_lich_chieu_phim_tabs/FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS";
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS =
  "fetch_thong_tin_lich_chieu_phim_tabs/FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS";
export const FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_FAILED =
  "fetch_thong_tin_lich_chieu_phim_tabs/FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_FAILED";

//Lấy thông tin cụm rạp theo hệ thống rap lên reducer(Quản lí lịch chiếu admin)
export const FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS =
  "fetch_thong_tin_cum_rap/FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS";
