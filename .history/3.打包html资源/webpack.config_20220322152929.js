/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-22 15:20:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-22 15:29:29
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
     plugins:{
         new HtmlWebpackPlugin;
     },
     mode:'development'
 }