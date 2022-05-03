/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:17:43
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
        // 所有资源引入的公共路径前缀 --> 补充到path的前面 --> 'imgs/a.jpg' --> '/imgs/a.jpg'
        publicPath: '/',
        // 非入口chunk的名称
        chunkFilename: '[name]_chunk.js' 
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}