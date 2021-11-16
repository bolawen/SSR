const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target:'node',
  mode: "development",
  entry: Path.resolve(process.cwd(), "./src/server/index.js"),
  output: {
    path: Path.resolve(process.cwd(), "build"),
    filename: "./server/index.js",
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude:/node_modules/,
      },
      {
        test:/.(png|jpe?g|gif|svg)$/i,
        type:'asset',
        generator:{
          filename:'images/[name]-[hash][ext]'
        }
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
};
