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
    alert("执行parent函数a！"); 
    alert("开始调用回调函数"); 
    callback(); 
    alert("结束回调函数"); 
}
 
function b(){ 
    alert("执行回调函数b"); 
} 
 
function test() 
{ 
   a(b);
   a(function() { 
        alert("执行匿名回调函数"); 
   }); 
}
test();