/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-19 21:34:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-19 22:20:41
 */


//  import './index.css'

//  console.log(module)
//  console.log(require('path'))

 
function a(callback) 
{
    console.log("执行parent函数a！"); 
    console.log("开始调用回调函数"); 
    callback(); 
    console.log("结束回调函数"); 
}
 
function b(){
    a = 1; 
    for(var i = 0; i < 10000; i++){
        a++;
    }
    console.log("执行回调函数b"); 
} 
 
function test() 
{ 
   a(b);
   a(function() { 
    console.log("执行匿名回调函数"); 
   }); 
}
test();