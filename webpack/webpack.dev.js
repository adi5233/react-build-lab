const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: "./dist"
    }
  }
});