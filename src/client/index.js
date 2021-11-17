import React from "react";
import ReactDOM from "react-dom";
import GetStore from "../store/index";
import { Provider } from "react-redux";
import RouterList from "../router/index";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const buildApp = () => {
  return (
    <Provider store={GetStore()}>
      <BrowserRouter>{renderRoutes(RouterList)}</BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(buildApp(), document.getElementById("root"));
