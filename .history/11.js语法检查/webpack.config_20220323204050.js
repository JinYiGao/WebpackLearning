/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:39:10
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-23 20:40:50
 */
const {resolve} = require('path');

module.exports={
    entry: './src/js/index.js',
    output: {
        filename: '/js/built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[

    ],
    mode: 'development'
}