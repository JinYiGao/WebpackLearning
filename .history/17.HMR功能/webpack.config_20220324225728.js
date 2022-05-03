/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 16:15:35
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 22:57:27
 */

 const { resolve } = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: './src/js/index.js',
     output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
     },
     module: {
         rules: [
             // loader配置
             {
                 // 处理less资源
                 test: /\.less$/,
                 use: [
                     'style-loader',
                     'css-loader',
                     'less-loader'
                 ]
             },
             {
                // 处理css资源
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 在Webpack5中借助内置asset-module来实现
                type: 'asset/resource',
                generator:{
                    filename: 'asset/[hash:6][ext]',
                }
            },
            {
                // 处理html中的img资源
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|jpg|gif)/,
                // 在Webpack5中借助内置asset-module来实现
                type: 'asset/resource',
                generator:{
                    filename: 'asset/[hash:6].[ext]'
                }
                // Webpack4用法
                // loader: 'file-loader'
            }
         ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     mode: 'development',

     devServer:{
        // Webpack4用法
        // contentBase: resolve(__dirname, 'build'),
        // Webpack5用法
        static: resolve(__dirname, 'build'),
        // 启动gzip压缩, 使代码体积更小，启动更快
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        // HMR
        hot:true
    }
 }