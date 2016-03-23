/**
 * Created by Administrator on 2016/3/10.
 */
/**
 * Created by Administrator on 2016/3/10.
 */
var path=require('path');
var fs=require('fs');
/*
 *normalize 将非标准化的路径转化成标准化的路劲
 * 1.解析 如..
 * 2.多个斜杠会转成一个斜杠
 * 3.window下的斜杠会转成正斜杠
 *resolve
 * 1.以应用程序为根起点
 * 2. .. .
 * 3.普通字符串代表子目录
 * 4./代表绝对路劲
 */
console.log(path.normalize('./a////b//..\\c//e//..//'));//a\c\
//多个参数字符串合并成一个路径 字符串
console.log(path.join(__dirname,'a','b'));
//以应用程序为根目录，做为起点，根据参数解析出一个绝对路劲
console.log(path.resolve())//空代表当前的目录和路径
console.log(path.resolve('..'))//。。返回上个目录 。当前目录
console.log(path.resolve('/a','b'))//  /a/b
/*
*  可以获取两个路径之间的相对关系
* */
console.log(path.relative(__dirname,'/a'));
//返回指定路径的所在目录
console.log(path.dirname(__dirname));//dir是6.path,6.path是属于mynode这个目录
console.log(path.dirname('./1.path.js'));//. 当前目录
//basename 获取路径中文件名
console.log(path.basename(__filename));




