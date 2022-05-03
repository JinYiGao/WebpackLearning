/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:39:10
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 21:56:56
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
                    presets: [['@babel/preset-env',{
                        // 按需加载
                        useBuiltIns: 'usage',
                        //指定core-js版本
                        corejs: {
                            version: 3
                        },
                        // 指定兼容性做到哪个浏览器
                        targets: {
                            chrome: '60',
                            firefox: '60',
                            ie: '9',
                            safari: '10',
                            edge: '17'
                        }
                    }]
                    ]
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