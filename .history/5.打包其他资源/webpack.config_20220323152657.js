/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 15:24:04
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 15:26:38
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
             }
         ]
     },
     plugins:[
         new HtmlWebpaclPlugin({
             template: 'index.html'
         })
     ],
     mode: 'development'
 }