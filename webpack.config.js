const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env["production"] === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: isProduction ? "production" : "development",
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
