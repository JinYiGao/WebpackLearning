/*
 * @Descripttion:
 * @version:
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:34:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 21:06:37
 */
import '../css/index.css';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(mul(2, 2));

// 注册serviceWorker
// 处理兼容性问题
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(()=>{
      console.log('注册成功!');
    }).catch(()=>{
      console.log('注册失败');
    })
  })
}