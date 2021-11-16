import React from 'react';
import App from "../pages/App";
import ReactDOMServer from "react-dom/server";

export const render = () => {
  const content = ReactDOMServer.renderToString(<App />);
  return content;
};

export const buildHtmlString = (content) => {
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
