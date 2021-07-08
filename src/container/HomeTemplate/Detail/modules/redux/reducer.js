import {
  FETCH_THONG_TIN_PHIM_FAILED,
  FETCH_THONG_TIN_PHIM_REQUESTS,
  FETCH_THONG_TIN_PHIM_SUCCESS,
  FETCH_THONG_TIN_PHIM_CLEAN_UP,
  FETCH_USERS_COMMENT_SUCCESS,
} from "./constants";

const initialState = {
  movieDetail: null,
  loading: false,
  err: null,
  comments: null,
  tongComment: 0,
  ratingAll: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_THONG_TIN_PHIM_REQUESTS:
      state.loading = true;
      return { ...state };

    case FETCH_THONG_TIN_PHIM_SUCCESS:
      state.loading = false;
      state.movieDetail = payload;
      return { ...state };

    case FETCH_THONG_TIN_PHIM_FAILED:
      state.loading = false;
      state.err = payload;
      return { ...state };

    case FETCH_THONG_TIN_PHIM_CLEAN_UP:
      state.movieDetail = null;
      return { ...state };

    case FETCH_USERS_COMMENT_SUCCESS:
      state.comments = payload;
      let arrComment = [...state.comments];
      let totalComment = arrComment.reduce((total) => {
        return (total += 1);
      }, 0);
      state.comments = arrComment;
      state.tongComment = totalComment;
      return { ...state };

    default:
      return { ...state };
  }
};
