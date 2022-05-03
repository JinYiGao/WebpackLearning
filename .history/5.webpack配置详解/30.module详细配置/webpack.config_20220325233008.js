/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:29:44
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
            {
                test:/\.css$/,
                // 多个loader用use
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                // 排除文件
                exclude: /node_modules/,
                // 只检查src下的js文件
                include: resolve(__dirname, 'src'),
                // 优先执行
                enforce: 'pre',
                // 延后执行
                // enforce: 'post',
                // 单个loader用loader
                loader: 'eslint-loader'
            },
            {
                // 以下配置只会生效一个
                oneOf:[]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}