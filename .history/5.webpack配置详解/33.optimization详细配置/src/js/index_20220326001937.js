/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 22:53:04
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-26 00:19:36
 */

import '$css/index';

import(/* webpackChunkName: 'a' */'./a.js').then((add)=>{
    console.log(add(1,2));
})