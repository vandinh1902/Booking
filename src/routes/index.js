import Detail from "../container/HomeTemplate/Detail";
import Home from "../container/HomeTemplate/Home";
import Movie from "../container/HomeTemplate/Movie";
import SignIn from "../container/HomeTemplate/Signin";
import SignUp from "../container/HomeTemplate/Signup";
import Promotion from "../container/HomeTemplate/Promotion";
import { FlareSharp } from "@material-ui/icons";
import About from "../container/HomeTemplate/About";
import Dashboard from "../container/AdminTemplate/Dashboard/Dashboard";
import LichChieu from "../container/HomeTemplate/LichChieu/LichChieuLayout";
import UserProfile from "../container/HomeTemplate/UserProfile";
import PhongVe from "../container/HomeTemplate/PhongVe";

export const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/lich-chieu",
    component: LichChieu,
  },
  {
    exact: false,
    path: "/promotion",
    component: Promotion,
  },
  {
    exact: false,
    path: "/gioi-thieu",
    component: About,
  },
  {
    exact: false,
    path: "/movie/:id",
    component: Detail,
  },
  {
    exact: false,
    path: "/profile",
    component: UserProfile,
  },
  {
    exact: false,
    path: "/checkout/:id",
    component: PhongVe,
  },
];

export const routesAdmin = [
  {
    exact: false,
    path: "/admin/dashboard",
    component: Dashboard,
  },
];
