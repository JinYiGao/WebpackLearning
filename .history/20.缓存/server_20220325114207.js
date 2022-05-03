/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-03-25 11:40:54
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-03-25 11:42:07
 */
const express = require('express');

const app = express();

app.use(express.static('build', {maxAge: 1000 * 3600}));

app.listen(3000);