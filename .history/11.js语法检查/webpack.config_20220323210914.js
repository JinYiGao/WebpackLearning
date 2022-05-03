/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:39:10
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 21:09:13
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            // 语法检查: eslint-loader
            // 只检查用户自己编写的源代码,不检查第三方库
            // 设置检查规则 —— package.json中eslintConfig属性进行设置 
            //                下载eslint-config-airbnb-base eslint-plugin-import
            {
                test: /\.js$/,
                // 不检查第三方库
                // exclude: /node_modules/,
                loader: 'eslint-loader',
                options:{
                    fix:true
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}