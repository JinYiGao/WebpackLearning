/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 21:41:40
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 21:45:03
 */
const {resolve} = require('path');
/*
    使用dll技术对某些库(第三方库)进行单独打包
*/
module.exports = {
    entry: {
        // 最终打包生成的[name] --> jquery
        // ['jquery'] --> 要打包的库是jquery
        jquery: ['jquery']
    },
    output:{
        filename: '[name].js',
        path: resolve(__dirname, 'dll')
    }
}