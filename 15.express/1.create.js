/**
 * Created by Administrator on 2016/3/26.
 */
/*
* 现在最流行的快速开发框架
* 静态文件服务 中间件 路由控制 模板
* */
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('/');
});
app.get('/us',function(req,res){
    res.send('us');
});
app.get('*',function(req,res){
    res.send('404');
})
app.listen(8080);