/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:38:20
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 15:48:39
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
                 loader: 'url-loader',
                 options: {
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