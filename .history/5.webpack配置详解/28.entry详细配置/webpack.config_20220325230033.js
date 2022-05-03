/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 22:59:16
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js' , './src/add.js'],
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}