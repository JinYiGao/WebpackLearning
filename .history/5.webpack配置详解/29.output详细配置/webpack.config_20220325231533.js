/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:15:08
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称(可以指定名称 + 目录)
        filename: 'js/[name].js',
        // 指定输出文件目录(将来所有资源输出的公共目录)
        path: resolve(__dirname, 'build'),
        // 所有输出资源的公共路径 --> 补充到path的前面
        publicPath: '/'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}