/**
 * Created by Administrator on 2016/3/11.
 */
/*
 * fs filesystem
 * 支持同步异步两种方式
 * 异步和同步
 Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
 例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
 建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
 *
 * */
var fs =require('fs');
//同步方式
var content=fs.readFileSync('./index.html','utf-8');
console.log(content);
//异步方式
fs.readFile('./index.html','utf8',function(err,data){
    console.log(data);
    console.log('zhenglei');
})

