/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 17:35:57
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 20:36:24
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置node环境变量
process.env.NODE_ENV = 'production'

module.exports={
    entry: './src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    // 'style-loader',
                    // 这个loader取代style-loader，作用是提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',

                    // css兼容性处理: postcss --> postcss-loader postcss-preset-env
                    // 帮postcss找到package.json中browserslist里面的配置,通过配置加载指定的css兼容样式
                    // "browserslist":{
                    // 开发环境  指node环境变量
                    //     "development":[
                    //         "last 1 chrome version",
                    //         "last 1 firefox version",
                    //         "last 1 safari version"
                    //     ],
                    // 默认生产环境
                    //     "production":[
                    //         ">0.2%",
                    //         "no dead",
                    //         "not op_mini all"
                    //     ]
                    // }

                    // 方法一 使用loader的默认配置
                    // 'postcss-loader',
                    // 方法二 修改loader的配置
                    {
                        loader:'postcss-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 对输出文件进行重命名并指定目录
            filename: 'css/built.css'
        }),
        // 压缩css
        
    ],
    mode:'development'
}