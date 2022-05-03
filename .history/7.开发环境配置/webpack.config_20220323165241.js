/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 16:15:35
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 16:52:41
 */

 const { resolve } = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
const { options } = require('less');

 module.exports = {
     entry: './src/js/index.js',
     output: {
         filename: 'js/built.js',
         path: resolve(__dirname, 'build')
     },
     module: {
         rules: [
             // loader配置
             {
                 // 处理less资源
                 test: /\.less$/,
                 use: [
                     'style-loader',
                     'css-loader',
                     'less-loader'
                 ]
             },
             {
                // 处理css资源
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 在Webpack5中借助内置asset-module来实现
                type: 'asset/resource',
                
                // 或者借助url-loader来实现
                // loader: 'url-loader',
                // options: {
                //     // 图片大小小于8kb, 就会被当成base64处理
                //     // 优点: 减少请求数量(减轻服务器压力)
                //     // 缺点: 图片体积更大
                //     limit: 30 * 1024,
                //     // webpack5使用要加
                //     // 因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                //     // 需要关闭utl-loader的es6模块化，使用commonjs解析
                //     esModule: false,
                //     // 给图片重命名
                //     // [ext]取文件原扩展名
                //     name: '[hash:10].[ext]'
                // },
                // // Webpack5使用要加
                // type: 'javascript/auto'
            },
            {
                // 处理html中的img资源
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|jpg|gif)/,
                // 在Webpack5中借助内置asset-module来实现
                type: 'asset/resource',
                options: {
                    esmodule: false
                    // outputPath: 'css'
                }
                // Webpack4用法
                // loader: 'file-loader'
            }
         ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     mode: 'development',

     devServer:{
        // Webpack4用法
        // contentBase: resolve(__dirname, 'build'),
        // Webpack5用法
        static: resolve(__dirname, 'build'),
        // 启动gzip压缩, 使代码体积更小，启动更快
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
 }