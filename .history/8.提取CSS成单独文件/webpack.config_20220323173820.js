/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 17:35:57
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 17:38:20
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/js/index.js',
    output:{
        filename:'/js/built.js',
        path:resolve(__dirname,'build');
    }
}