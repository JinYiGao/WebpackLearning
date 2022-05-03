/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:20:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 22:11:44
 */


 const {resolve} = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

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
         // 告诉webpack哪些库不参与打包,同时使用时名称也需要修改,但是最终并未引入包
         new webpack.DllReferencePlugin({
             manifest: resolve(__dirname, 'dll/manifest.json')
         }),
         // 将某个文件打包输出出去,并在html中自动引入该资源
         new AddAssetHtmlWebpackPlugin({
             filepath: resolve(__dirname, 'dll/jquery.js')
         })
     ],
     mode:'production'
 }