/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-24 22:08:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 14:19:31
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                require('postcss-preset-env')()
            ]
        }
    }
}
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        filename: 'js/built.[hash:10].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                // oneOf以下loader只会匹配一个
                oneOf:[
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        // css兼容性处理
                        commonCssLoader
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        commonCssLoader,
                        'less-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_module/,
                    loader: 'babel-loader',
                    options:{
                        presets: [
                            [
                                '@babel/preset-env',
                                {
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
                                }
                            ]
                        ],
                        cacheDirectory: true
                    }
                },
                {
                    test: /\.(jpg|png|gif)/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[hash:6][ext]'
                    }
                },
                // html中图片处理
                {
                    test: /\.html/,
                    loader: 'html-loader'
                },
                // 其他文件处理
                {
                    exclude: /\.(js|css|less|html|jpg|jpg|gif)/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'asset/[hash:6][ext]'
                    }
                }
            ]
        }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.[hash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(), // CSS压缩
        new ESLintWebpackPlugin({
            fix: true,
            extensions: ['js'],
            exclude: '/node_modules/'
        })
    ],
    mode: 'production',
    devtool:'source-map'
}