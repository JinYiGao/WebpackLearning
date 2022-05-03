/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 16:15:35
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 16:23:03
 */

 const { resolve } = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: './src/idnex.js',
     output: {
         filename: 'built.js',
         path: resolve(__dirname, 'build')
     },
     module: {
         rules: [
             // loader配置
             {
                 // 处理less资源
                 test: /\.less$/,
                 user: [
                     'style-loader',
                     'css-loader',
                     'less-loader'
                 ]
             },
             {
                // 处理css资源
                test: /\.css$/,
                user: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 在Webpack5中借助内置asset-module来实现
                type: 'asset/resource'
            },
            {
                // 处理html中的img资源
                test: /\.html$/,
                loader: 'html-loader'
            }
         ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ]
 }