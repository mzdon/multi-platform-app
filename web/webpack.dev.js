const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: [path.join(__dirname, "public"), path.join(__dirname, "lib")],
        port: 9000,
        historyApiFallback: true
    }
});
