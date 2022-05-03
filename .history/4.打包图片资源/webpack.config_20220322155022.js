/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:38:20
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 15:50:11
 */

 const {resolve} = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: './src/index.js',
     output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
     },
     module:{
         rules:[
             {
                 test: /\.less$/,
                 use:[
                     'style-loader',
                     'css-loader',
                     'less-loader'
                 ]
             },
             {
                 test: /\.(jpg|png|gif)$/,
                 // 只是用一个loader
                 loader: 'url-loader',
                 options: {
                     // 图片大小小于8kb, 就会被当成base64处理
                     // 优点: 减少请求数量(减轻服务器压力)
                     // 缺点: 图片体积更大
                     limit: 8 * 1024
                 }
                //  use: [
                //      'url-loader'
                //  ]
             }
         ]
     },
     plugins:[
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     mode: 'development'
 }