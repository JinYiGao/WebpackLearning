/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-24 22:08:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 20:16:25
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        test: './src/js/test.js'
    },
    output:{
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production',
    
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    }
}