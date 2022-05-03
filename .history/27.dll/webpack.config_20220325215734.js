/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:20:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 21:56:41
 */


 const {resolve} = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 
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
         // template参数: 复制index.html文件, 并自动引入所有资源
         new HtmlWebpackPlugin({
             template: './src/index.html'
         }),
         // 告诉webpack哪些库不参与打包,同时使用时名称也需要修改
         new webpack.DllPlugin({
             manifest: resolve(__dirname, 'dll/manifest.json')
         })
     ],
     mode:'production'
 }