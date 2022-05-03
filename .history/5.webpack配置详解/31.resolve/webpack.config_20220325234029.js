/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:39:44
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称(可以指定名称 + 目录)
        filename: 'js/[name].js',
        // 指定输出文件目录(将来所有资源输出的公共目录)
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development',
    
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名
        alias: {
            $css: resolve(__dirname, 'src/css')
        }
    }
}