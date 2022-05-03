/*
 * @Descripttion:
 * @version:
 * @Author: JinYiGao
 * @Date: 2022-03-23 20:52:27
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-24 21:38:10
 */
const add = (x, y) => x + y;

new Promise((resolve)=>{
  setTimeout(() => {
    console.log('finish');
  }, 1000);
})
// eslint-disable-next-line
console.log(add(2, 3));
