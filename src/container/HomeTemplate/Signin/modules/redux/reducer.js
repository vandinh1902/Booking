import {
  FETCH_USER_INFO_REQUESTS,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILED,
  CLEAN_UP_USER_INFO,
} from "./constants";

const initialState = {
  thongTinUser: null,
  err: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_INFO_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case FETCH_USER_INFO_SUCCESS:
      state.thongTinUser = payload;
      state.isLoading = false;
      return { ...state };

    case FETCH_USER_INFO_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    case CLEAN_UP_USER_INFO: {
      state.thongTinUser = null;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
