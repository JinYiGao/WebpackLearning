/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:05:00
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        add: './src/add.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}