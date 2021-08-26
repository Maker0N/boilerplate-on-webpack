const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    filename: "js/[name].bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: resolve(__dirname, "dist"),
    },
    // contentBase: resolve(__dirname, 'dist'),
    port: 8080,
    host: "localhost",
    // index: 'index.html',
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   use: ["eslint-loader"],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/main.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/index.html`,
          to: "index.html",
        },
      ],
    }),
  ],
};

module.exports = config;
