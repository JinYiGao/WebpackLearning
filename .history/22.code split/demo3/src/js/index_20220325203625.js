/*
 * @Descripttion:
 * @version:
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:34:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 20:36:22
 */

import {mul} from './test'
function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

import('./test').then(({mul, count}) => {
  console.log(mul(2,3));
  console.log(count(6,2));
})
// console.log(sum(1, 2, 3, 4, 5));
// console.log(mul(2, 2));