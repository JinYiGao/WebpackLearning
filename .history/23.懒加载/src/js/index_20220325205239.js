/*
 * @Descripttion:
 * @version:
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:34:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 20:52:27
 */

console.log('index.js文件被加载了');

// import {mul} from './test'

document.getElementById('btn').onclick = function(){
    // console.log(mul(2,3));
    import(/* webpackChunkName: test , webpackPrefetch: true */'./test').then(({mul, count})=>{
        console.log(mul(2, 3));
    })
}