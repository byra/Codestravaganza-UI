const path = require("path");
const APP_DIR = path.resolve(__dirname, './src');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackDashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");


module.exports = {

    entry:{
        main: APP_DIR
    },

    devServer: {
        port: 5005
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
        new HtmlWebpackPlugin({filename: "index.html", template: "./src/assets/index.html"})
    ]
};