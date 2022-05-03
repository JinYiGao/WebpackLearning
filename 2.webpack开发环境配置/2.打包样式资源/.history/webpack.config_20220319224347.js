/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-19 21:35:58
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-19 22:43:04
 */

// resolve 用来拼接绝对路径的方法
const {resolve} = require('path');

module.exports = {
    // Webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename: 'built.js'
        // 输出路径
        path: resolve(__dirname, 'build')
    }
}