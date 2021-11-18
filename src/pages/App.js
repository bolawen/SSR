import React from "react";
import AppCss from './App.scss';
import withStyle from "../hoc/withStyleHoc";
import {renderRoutes} from 'react-router-config'

function App(props) {
  return (
    <div id='app'>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default withStyle(AppCss)(App);
