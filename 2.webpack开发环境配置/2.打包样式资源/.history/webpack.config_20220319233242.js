/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-19 21:35:58
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-19 23:31:51
 */

// resolve 是nodejs path模块中用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
    // Webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname是nodejs变量，代表当前文件所在目录
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module:{
        rules:[
            // 详细地loader配置
            // *** 不同文件 需要配置不同loader ***
            {
                //匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader去处理
                use:[
                    // use数组中loader执行顺序是从尾部到前面依次执行
                    // 2. 创建style标签，将js中的样式资源插入，添加到页面head中生效
                    'style-loader',
                    // 1. 将css文件以字符串的形式编成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[
        // 详细plugins配置

    ],
    // 模式
    mode: 'development', // 开发模式
    // mode: 'production'
}