/*
 * @Descripttion:
 * @version:
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:52:27
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 21:51:25
 */
import '@babel/polyfill';

const add = (x, y) => x + y;

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('finish');
    resolve();
  }, 1000);
});
// eslint-disable-next-line
console.log(add(2, 3));

// promise.then(() => {
//   console.log(111);
// });

console.log(promise);
