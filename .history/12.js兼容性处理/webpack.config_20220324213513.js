/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:39:10
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 21:34:27
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设,指示babel做怎样的兼容性处理
                    presets: ['@babel/preset-env']
                }
            }
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