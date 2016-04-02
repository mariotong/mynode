/**
 * 1.在处理HTTP请求的过程 ，用来完成特定任务的函数
 * 可以传递请求，也可以终止请求
 * next 表示接受下一个中间件调用，
 *
 **/
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.end('/');
});
app.get('/us/:username',function(req,res){
    console.log(req.query);
    console.log(req.params.username);
    res.setHeader('Content-Type','text/html;charset=utf8');
   // res.send('关于我们');
    res.send({name:'zhenglei'});
})
app.listen(8080);

