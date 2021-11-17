import React from "react";
import { Provider } from "react-redux";
import GetStore from "../store/index";
import RouterList from "../router/index";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const buildApp = (ctx, context) => {
  return (
    <Provider store={GetStore()}>
      <StaticRouter location={ctx.request.path} context={context}>
        {renderRoutes(RouterList)}
      </StaticRouter>
    </Provider>
  );
};

export const render = (ctx, context) => {
  const content = ReactDOMServer.renderToString(buildApp(ctx, context));
  return content;
};

export const buildHtmlString = (ctx, content) => {
  const htmlString = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>基于Webpack的React服务端渲染</title>
  </head>
  <body>
    <div id='root'>${content}</div>
    <script src='/client/index.js'></script>
  </body>
  </html>`;
  return htmlString;
};
