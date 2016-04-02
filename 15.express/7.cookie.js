/**
 * Created by Administrator on 2016/3/27.
 */
var express=require('express');
var cookieParser=require('cookie-parser');
var cookieSession=require('cookie-session');
var app=express();
app.use(cookieParser());
app.use(cookieSession({
    secret:'zhegleikey'
}));
app.get('/write',function(req,res){
    res.setHeader('Set-Cookie','name=zhenglei');
    res.send('hello');
});
app.get('/read',function(req,res){
    res.send(req.cookies);
});
app.listen(8080);