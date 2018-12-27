var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve("lib")
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: "babel-loader"},
            {test: /\.css$/, use: ["style-loader","css-loader"]},
            {test: /\.scss$/, use: ["style-loader","css-loader","sass-loader"]}
        ]
    }
};
