/**
 * Created by Administrator on 2016/3/10.
 */
var util=require('util');
//util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足
/*
* 这是一个基于对象间原型继承的函数。
*
 */
console.log(util.inspect({name:'zhenglei'}));
console.log(util.isArray([]))
console.log(util.isRegExp(/^zhenglei$/))
console.log(util.isDate(new Date()))
console.log(util.isError(new Error()))