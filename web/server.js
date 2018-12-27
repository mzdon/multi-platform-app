"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.dev");

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    stats: {
        colors: true
    }
});
const server = new WebpackDevServer(compiler, devServerOptions);
const port = devServerOptions.port || 8080;

server.listen(port, "127.0.0.1", () => {
    console.log("Starting server on http://localhost:" + port);
});
