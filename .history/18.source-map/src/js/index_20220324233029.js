/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-23 16:27:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 23:30:06
 */
 import '../css/iconfont.css'
 import '../css/index.less'
 import print from './print'
 
 console.log('index.js')
prin(11)
 function add(x, y){
    return x + y;
 }

 console.log(add(2,3));
 print();

 if(module.hot){
    // 为true说明开启了hmr功能
    module.hot.accept('./print.js', function(){
       // 方法会监听print.js文件变化,一但发生变化,其它默认不会重新打包构建
       // 会执行后面的回调函数
       print();
    })
 }