/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:39:10
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 21:22:43
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports={
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            // 语法检查
            // 只检查用户自己编写的源代码,不检查第三方库
            // 设置检查规则 —— package.json中eslintConfig属性进行设置 
            //                下载eslint-config-airbnb-base eslint-plugin-import
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ESLintWebpackPlugin({
            fix: true,
            extensions: ['js'],
            exclude: '/node_modules/'
        })
    ],
    mode: 'development'
}