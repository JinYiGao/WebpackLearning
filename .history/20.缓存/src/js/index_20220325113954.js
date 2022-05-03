/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:34:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 11:39:52
 */
import '../css/index.css'

function sum(...args){
    return args.reduce((p, c)=>p+c,0);
}

console.log(sum(1,2,3,4));