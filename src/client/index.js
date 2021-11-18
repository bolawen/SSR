import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouterList from "../router/index";
import { GetClientStore } from "../store/index";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const buildApp = () => {
  return (
    <Provider store={GetClientStore()}>
      <BrowserRouter>{renderRoutes(RouterList)}</BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(buildApp(), document.getElementById("root"));
