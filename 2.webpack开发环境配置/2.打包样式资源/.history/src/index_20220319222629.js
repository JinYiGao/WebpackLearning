/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-19 21:34:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-19 22:26:00
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
    setTimeout(()=>{
        console.log('aaa');
    },1000)
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