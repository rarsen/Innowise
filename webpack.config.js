const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/ui.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, 
  },
  mode: "development", 
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), 
    },
    port: 8080,
    open: true, 
    hot: true, 
    compress: true, 
    historyApiFallback: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
      filename: "index.html", 
    }),
  ],
};
