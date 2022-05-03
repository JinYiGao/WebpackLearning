/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 17:35:57
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 20:12:19
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                    // 帮postcss找到package.json中browserlist里面的配置,通过配置加载指定的css兼容样式
                    // 方法一 使用loader的默认配置
                    // 'postcss-loader',
                    // 方法二 修改loader的配置
                    {
                        loader:'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins:()=>{
                                // postcss插件
                                require('postcss-preset-env')()
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出文件进行重命名并指定目录
            filename: 'css/built.css'
        })
    ],
    mode:'development'
}