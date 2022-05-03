/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 15:24:04
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 16:01:40
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
     mode: 'development',

     // 开发服务器 devServer: (用来自动化编译，自动打开浏览器，自动刷新浏览器)
     devServer:{
         contentBase: resolve(__dirname, 'build'),
         //启动gzip压缩, 使代码体积更小，启动更快
         compress: true,
         //端口号
         port: 3000
     }
 }