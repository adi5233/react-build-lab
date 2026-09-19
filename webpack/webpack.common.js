const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.jsx"),

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].chunk.js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};