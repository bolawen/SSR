import AppCss from "./App.scss";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import withStyle from "../hoc/withStyleHoc";
import { renderRoutes } from "react-router-config";
import { findUser } from "../store/action/user";

function App(props) {
  useEffect(() => {}, []);
  return <div id="app">{renderRoutes(props.route.routes)}</div>;
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};

const ConnectApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(AppCss)(App));
ConnectApp.loadData = (store) => {
  return store.dispatch(findUser());
};

export default ConnectApp;
