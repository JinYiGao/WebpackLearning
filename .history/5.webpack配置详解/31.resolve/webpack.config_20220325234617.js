/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:50:56
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 23:45:45
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
    mode: 'development',
    
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名
        // 例如 将src/css 替换为 $css
        // 优点: 简写路径 
        // 缺点: 没有提示
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名
        // 文件名一样则匹配第一个遇到的, 命名时需要注意
        extensions: ['.css', '.js', '.json']
    }
}