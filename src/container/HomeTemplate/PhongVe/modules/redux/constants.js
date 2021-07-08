// DOMAIN
export const DOMAIN = `https://movie0706.cybersoft.edu.vn/api`;

/* Action từ Component request lên SAGA */
//Lấy chi tiết một bộ phim dựa trên params ID
export const FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS_SAGA";

//Post thông tin đặt vé
export const POST_THONG_TIN_DAT_VE_REQUESTS_SAGA =
  "post_dat_ve/POST_THONG_TIN_DAT_VE_REQUESTS_SAGA";

/*Action từ SAGA request lên Reducer */
//Trạng thái lấy chi tiết một bộ phim để xuất ra DetailMovie dựa trên params ID
export const FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS";
export const FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS";
export const FETCH_LAY_DANH_SACH_PHONG_VE_FAILED =
  "fetch_phong_ve/FETCH_LAY_DANH_SACH_PHONG_VE_FAILED";

//Trạng thái post thông tin đặt vé
export const POST_THONG_TIN_DAT_VE_REQUESTS =
  "post_dat_ve/POST_THONG_TIN_DAT_VE_REQUESTS";
export const POST_THONG_TIN_DAT_VE_SUCCESS =
  "post_dat_ve/POST_THONG_TIN_DAT_VE_SUCCESS";
export const POST_THONG_TIN_DAT_VE_FAILED =
  "post_dat_ve/POST_THONG_TIN_DAT_VE_FAILED";

/*Action từ component thẳng lên reducer */
export const BOOKING_SEAT = "booking_seat/BOOKING_SEAT";
export const BUYING_COMBO = "buying_combo/BUYING_COMBO";

//Clean sau khi khỏi component
export const CLEAN_UP_REDUCER_PHONG_VE =
  "clean_up_reducer_phong_ve/CLEAN_UP_REDUCER_PHONG_VE";
