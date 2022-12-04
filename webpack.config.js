const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env["production"] === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      publicPath: "auto",
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
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
