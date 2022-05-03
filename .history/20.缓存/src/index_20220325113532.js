/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:34:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 11:35:32
 */
function sum(...args){
    return args.reduce((p, c)=>p+c,0);
}

console.log(sum(1,2,3,4));