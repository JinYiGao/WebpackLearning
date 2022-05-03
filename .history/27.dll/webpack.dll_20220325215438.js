/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 21:41:40
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 21:54:38
 */
const {resolve} = require('path');
const webpack = require('webpack');

/*
    使用dll技术对某些库(第三方库)进行单独打包
    运行指令: webpack --config webpack.dll.js
*/
module.exports = {
    entry: {
        // 最终打包生成的[name] --> jquery
        // ['jquery'] --> 要打包的库是jquery
        jquery: ['jquery']
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash]', // 打包的库里面向外暴露出去的内容叫什么名字
    },
    plugins:[
        // 打包生成一个manifest.json文件，提供和jquery的映射
        new webpack.DllPlugin({
            name: '[name]_[hash]', // 映射库的暴露的内容
            path: resolve(__dirname, 'dll/manifest.json')
        })
    ],
    mode: 'production'
}