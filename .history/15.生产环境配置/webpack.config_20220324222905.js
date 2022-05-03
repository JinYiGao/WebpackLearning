/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-24 22:08:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 22:29:05
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                require('postcss-preset-env')()
            ]
        }
    }
}
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // css兼容性处理
                    commonCssLoader
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    commonCssLoader,
                    'less-loader'
                ]
            },
            {

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new OptimizeCssAssetsWebpackPlugin(), // CSS压缩
        new ESLintWebpackPlugin({
            fix: true,
            extensions: ['js'],
            exclude: '/node_modules/'
        })
    ],
    mode: 'production'
}