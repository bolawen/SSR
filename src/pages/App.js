import AppCss from "./App.scss";
import { Helmet } from "react-helmet";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import withStyle from "../hoc/withStyleHoc";
import { findUser } from "../store/action/user";
import { renderRoutes } from "react-router-config";

function App(props) {
  return (
    <Fragment>
      <Helmet>
        <title>柏拉图-基于React实现服务端渲染</title>
        <meta
          name="discription"
          content="柏拉图-基于React实现服务端渲染"
        ></meta>
      </Helmet>
      <div id="app">{renderRoutes(props.route.routes)}</div>
    </Fragment>
  );
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
