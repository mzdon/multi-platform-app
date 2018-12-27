var path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "index.js",
        library: "shared-resources",
        libraryTarget: "umd",
        path: path.resolve("lib")
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: "babel-loader"},
            {test: /\.css$/, use: ["style-loader","css-loader"]},
            {test: /\.scss$/, use: ["style-loader","css-loader","sass-loader"]}
        ]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom"
        },
        redux: {
            commonjs: "redux",
            commonjs2: "redux",
            amd: "redux"
        },
        "react-redux": {
            commonjs: "react-redux",
            commonjs2: "react-redux",
            amd: "react-redux"
        }
    }
};
