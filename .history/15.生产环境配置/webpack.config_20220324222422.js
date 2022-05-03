/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-24 22:08:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 22:23:40
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
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'production'
}