/**
 * Created by Administrator on 2016/3/27.
 */
/*
* 模板
* 1.安装ejs
*
* */
var express=require('express');
var app=express();
app.set('view engine','ejs');//设置模板引擎
app.set('views',__dirname);//设置模板的存放路劲
app.get('/',function(req,res){
    res.render('index',{username:'zhenglei'});
});
app.listen(8080);