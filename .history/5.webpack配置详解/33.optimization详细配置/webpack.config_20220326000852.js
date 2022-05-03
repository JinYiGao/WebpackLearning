/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-26 00:08:52
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
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
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: 'production',
    
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名
        // 例如 将src/css 替换为 $css
        // 优点: 简写路径 
        // 缺点: 没有提示
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        
        // 配置省略文件路径的后缀名 --> './css/index'
        // 文件名一样则匹配第一个遇到的, 命名时需要注意
        extensions: ['.js', '.json', '.css'],

        // 告诉webpack解析模块时是去找哪个目录
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30 * 1024, // 分割的chunk最小为30kb
            maxSize: 0, // 最大没有限制
            minChunks: 1, // 要提取的chunk最少要被引用1次
            maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
        }
    }
}