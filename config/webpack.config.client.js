const Path = require("path");
const Merge = require('webpack-merge');
const Base = require('./webpack.config.base');

const Client = {
    entry: Path.resolve(process.cwd(), "./src/client/index.js"),
    output: {
        publicPath:'/',
        filename: "./client/index.js",
        path: Path.resolve(process.cwd(), "build"),
    },
}

module.exports=Merge.merge(Base,Client);