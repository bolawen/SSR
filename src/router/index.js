import App from "../pages/App";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import NotFound from "../pages/NotFound/index";

export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/about",
        component: About,
        exact: true,
      },
      { component: NotFound },
    ],
  },
];
