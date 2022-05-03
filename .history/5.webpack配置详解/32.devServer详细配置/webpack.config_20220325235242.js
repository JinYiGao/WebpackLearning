/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 15:24:04
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:52:42
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
     // 特点: 只会在内存中编译打包, 不会有任何输出
     devServer:{
         // --- 运行代码的目录 --- 
         // Webpack4用法
         // contentBase: resolve(__dirname, 'build'),
         // Webpack5用法
         static: resolve(__dirname, 'build'),
         // 启动gzip压缩, 使代码体积更小，启动更快
         compress: true,
         // 端口号
         port: 3000,
         // 域名
         host: 'localhost',
         // 自动打开浏览器
         open: true,
         // 开启HMR功能 webpack5自动开启
         hot: true
     }
 }