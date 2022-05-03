/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:38:20
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 15:46:28
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