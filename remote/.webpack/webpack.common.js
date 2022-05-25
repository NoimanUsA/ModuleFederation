import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import HTMLWebpackPlugin from "html-webpack-plugin";
import "dotenv/config";
import Dotenv from "dotenv-webpack";
import StylelintPlugin from "stylelint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(path.join(__dirname, "../src"));
export default {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    publicPath: "auto",
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".json", ".jsx", ".tsx", ".ts", ".js", ".mjs", ".d.ts"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  plugins: [
    new Dotenv(),
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new StylelintPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-load`er"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|svg|png)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
