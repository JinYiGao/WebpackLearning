/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:38:20
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 23:12:49
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
                 // 使用多个loader使用use, 从数组最后往前依次使用
                 use:[
                     'style-loader',
                     'css-loader',
                     'less-loader'
                 ]
             },
             {
                 test: /\.(jpg|png|gif)$/,
                 // 只是用一个loader
                 // 需要下载url-loader和file-loader
                 loader: 'url-loader',
                 options: {
                     // 图片大小小于8kb, 就会被当成base64处理
                     // 优点: 减少请求数量(减轻服务器压力)
                     // 缺点: 图片体积更大
                     limit: 300 * 1024
                 },
                 type: 'javascript/auto'
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