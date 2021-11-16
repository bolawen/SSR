const Path = require("path");
const Merge = require('webpack-merge');
const Base = require('./webpack.config.base');

const Client = {
    entry: Path.resolve(process.cwd(), "./src/client/index.js"),
    output: {
        path: Path.resolve(process.cwd(), "build"),
        filename: "./client/index.js",
        publicPath:'/',
    },
}

module.exports=Merge.merge(Base,Client);