const path = require("path");
const baseConfig = require("./webpack.config.base.js");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "./"
  }
});
