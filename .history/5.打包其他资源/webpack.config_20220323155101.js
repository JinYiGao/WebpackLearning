/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 15:24:04
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 15:51:01
 */

 const {resolve} = require('path');
 const HtmlWebpaclPlugin = require('html-webpack-plugin');
 
 module.exports = {
     entry: './src/index.js',
     output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
     },
     module:{
         rules:[
             {
                 test: /\.css$/,
                 use: [
                     'style-loader',
                     'css-loader'
                 ]
             },
             // 打包其他资源，除了html/js/css 以外的其他资源
             // Webpack5用法
             {
                 exclude: /\.(css|js|html)/,
                 type: 'asset/resource'
             }
         ]
     },
     plugins:[
         new HtmlWebpaclPlugin({
             template: './src/index.html'
         })
     ],
     mode: 'development'
 }