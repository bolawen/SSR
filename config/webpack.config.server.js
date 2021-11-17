const Path = require("path");
const Merge = require('webpack-merge');
const Base = require('./webpack.config.base');

const Server = {
    target:'node',
    entry: Path.resolve(process.cwd(), "./src/server/index.js"),
    output: {
        publicPath:'/',
        filename: "./server/index.js",
        path: Path.resolve(process.cwd(), "build"),
    },
}

module.exports=Merge.merge(Base,Server);