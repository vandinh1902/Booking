import { SEND_MOVIE_DETAIL } from "../../../../../components/MovieItem/modules/constants";
import {
  CHANGE_MA_HE_THONG,
  FETCH_HE_THONG_RAP_REQUESTS,
  FETCH_HE_THONG_RAP_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_REQUESTS,
  FETCH_MOVIES_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS,
  FETCH_THONG_TIN_LICH_CHIEU_SUCCESS,
  FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
} from "./constants";

const initialState = {
  movieList: [],
  isLoading: false,
  err: null,
  theater: [],
  cumRap: [],
  thongTinCumRap: null,
  maHeThongRap: "BHDStar",
  isModal: false,
  movieDetail: null,
  searchMovieFind: null,
  movieDetailLichChieu: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case FETCH_MOVIES_SUCCESS:
      state.isLoading = false;
      state.movieList = payload;
      return { ...state };

    case FETCH_MOVIES_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    case FETCH_HE_THONG_RAP_REQUESTS:
      state.loading = true;
      return { ...state };

    case FETCH_HE_THONG_RAP_SUCCESS:
      state.loading = false;
      state.theater = payload;
      return { ...state };

    case CHANGE_MA_HE_THONG:
      state.maHeThongRap = payload;
      return { ...state };

    case FETCH_THONG_TIN_LICH_CHIEU_SUCCESS:
      state.cumRap = payload;
      return { ...state };

    case "CHANGE_MODAL_OPEN":
      state.isModal = !state.isModal;
      return { ...state };

    case FETCH_THONG_TIN_LICH_CHIEU_PHIM_SUCCESS:
      state.searchMovieFind = payload;
      return { ...state };

    case FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_SUCCESS:
      state.movieDetailLichChieu = payload;
      return { ...state };

    case FETCH_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS:
      state.thongTinCumRap = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
