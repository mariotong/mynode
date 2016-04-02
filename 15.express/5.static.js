/**
 * Created by Administrator on 2016/3/27.
 */
var express=require('express');
var serveStatic=require('serve-static');
var app=express();
app.use(serveStatic(__dirname));
app.listen(8080);