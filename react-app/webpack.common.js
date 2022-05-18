import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import 'dotenv/config';
import Dotenv from 'dotenv-webpack';
import StylelintPlugin from 'stylelint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'

const __dirname = dirname( fileURLToPath( import.meta.url ));
const port = process.env.PORT || 3031;
console.log( process.env.PORT );

export default {
  entry: [ '@babel/polyfill', './src/index.jsx' ],
  // output: {
  //   path: path.resolve( __dirname, 'dist' ),
  //   filename: '[name].[hash].js',
  //   publicPath: '/',
  // },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [ '.json', '.jsx', '.tsx', '.ts', '.js', '.mjs', '.d.ts' ],
  },
  plugins: [
    new Dotenv(),
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new StylelintPlugin(),
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: 'micro2',
      remotes: {
        micro1: 'micro1@http://localhost:3030/remoteFront.js'
      },
      shared: {'react': {singleton: true, requiredVersion: '17.0.2'}, 'react-dom': {
        singleton: true,
        requiredVersion: '17.0.2',
      },}
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [ 'source-map-loader' ],
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.(jpg|jpeg|svg|png)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
          },
        },
      },
    ],
  },
};
