/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 22:52:47
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}