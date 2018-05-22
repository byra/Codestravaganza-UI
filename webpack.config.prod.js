const path = require("path");
const ASSET_PATH = process.env.ASSET_PATH || "/";
const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackDashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {

    entry: {
        main: APP_DIR
    },

    output: {
        path: BUILD_DIR,
        publicPath: ASSET_PATH,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, use: [{loader: "babel-loader", options: {presets: ["env", "react"]}}]},
            {test: /\.(css|scss)$/, use:[{loader: "style-loader"}, {loader: "css-loader", options: {sourceMap: true}}, {loader: "sass-loader", options: {sourceMap: true}}]},
            {test: /\.(png|jpg|gif|svg)$/, use: [{loader: "file-loader"}]}
        ]
    },

    plugins: [
        new webpackDashboardPlugin(),
        new BundleAnalyzerPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new HtmlWebpackPlugin({filename:"index.html", template:"./src/assets/index.html"}),
        new ExtractTextPlugin("style.css"),
        new UglifyJsPlugin(),
        new MinifyPlugin(minifyOpts, pluginOpts)
    ]
};