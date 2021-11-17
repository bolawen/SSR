import React from "react";
import ReactDOM from "react-dom";
import RouterList from '../router/index'
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const buildApp = () => {
  return <BrowserRouter>{renderRoutes(RouterList)}</BrowserRouter>;
};

ReactDOM.hydrate(buildApp(), document.getElementById("root"));
