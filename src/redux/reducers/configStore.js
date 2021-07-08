import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createMiddleWareSaga from "redux-saga";
import MovieReducer from "./../../container/HomeTemplate/Home/modules/redux/reducer";
import MovieDetailReducer from "./../../container/HomeTemplate/Detail/modules/redux/reducer";
import PhongVeReducer from "./../../container/HomeTemplate/PhongVe/modules/redux/reducer";
import UserReducer from "./../../container/HomeTemplate/Signin/modules/redux/reducer";
import rootSaga from "../sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  MovieReducer,
  MovieDetailReducer,
  PhongVeReducer,
  UserReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);

middleWareSaga.run(rootSaga);
export default store;
