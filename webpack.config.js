const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackDashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");


module.exports = {

    entry:{
        main: "./src"
    },

    devServer: {
        port: 5005
    },

    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, use: [{loader: "babel-loader", options: {presets: ["env", "react"]}}]},
            {test: /\.scss$/, use:[{loader: "style-loader"}, {loader: "css-loader", options: {sourceMap: true}}, {loader: "sass-loader", options: {sourceMap: true}}]},
            {test: /\.css$/, use:[{loader: "style-loader"}, {loader: "css-loader"}]},
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