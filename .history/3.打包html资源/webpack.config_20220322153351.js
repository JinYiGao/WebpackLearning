/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:20:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 15:33:11
 */


 const {resolve} = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 module.exports={
     entry: './src/index.js',
     output:{
         filename:'built.js',
         path: resolve(__dirname, 'build')
     },
     module:{
         rules:[
            // loader配置
            {

            }
         ]
     },
     plugins:[
         // 功能: 默认会创建一个空的html，自动引入打包输出的所有资源(JS/CSS)
         // 需要有自己写的结构的html文件
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     mode:'development'
 }