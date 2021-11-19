import App from "../pages/App";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Login from "../pages/Login/index";
import NotFound from "../pages/NotFound/index";

export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        loadData: Home.loadData,
        exact: true,
      },
      {
        path: "/about",
        component: About,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      { component: NotFound },
    ],
  },
];
