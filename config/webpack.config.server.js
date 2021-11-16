const Path = require("path");
const Merge = require('webpack-merge');
const Base = require('./webpack.config.base');

const Server = {
    target:'node',
    entry: Path.resolve(process.cwd(), "./src/server/index.js"),
    output: {
        path: Path.resolve(process.cwd(), "build"),
        filename: "./server/index.js",
    },
}

module.exports=Merge.merge(Base,Server);