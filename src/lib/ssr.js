import React from "react";
import { Provider } from "react-redux";
import RouterList from "../router/index";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";

export const preRender = (ctx, store) => {
  const matchedRouter = matchRoutes(RouterList, ctx.request.path);
  const promiseArray = [];
  matchedRouter.forEach((item) => {
    if (item.route.loadData) {
      let promise = new Promise((resolve) => {
        item.route
          .loadData(store)
          .then(() => {
            resolve();
          })
          .catch(() => {
            resolve();
          });
      });
      promiseArray.push(promise);
    }
  });
  return Promise.all(promiseArray);
};

const buildApp = (ctx, context, store) => {
  return (
    <Provider store={store}>
      <StaticRouter location={ctx.request.path} context={context}>
        {renderRoutes(RouterList)}
      </StaticRouter>
    </Provider>
  );
};

export const render = (ctx, context, store) => {
  const content = ReactDOMServer.renderToString(buildApp(ctx, context, store));
  return content;
};

export const buildHtmlString = (ctx, store, content,context) => {
  const css = context.css.length?context.css.join('\n'):'';
  const htmlString = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      ${css}
    </style>
    <title>基于Webpack的React服务端渲染</title>
  </head>
  <body>
    <div id='root'>${content}</div>
    <script>
        window.context={
          state:${JSON.stringify(store.getState())}
        }
    </script>
    <script src='/client/index.js'></script>
  </body>
  </html>`;
  return htmlString;
};
