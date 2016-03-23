/**
 * Created by Administrator on 2016/3/9.
 */
var http=require('http');
var fs= require('fs');
var mime=require('mime');

//创建一个http服务器 请求 响应
/*
http.createServer(function(req,res){
    var url =req.url;
    var urls=url.split('?');
    var pathname=urls[0];
    var query=urls[1];
    if( pathname=='/index.html'){
        var content=fs.readFileSync('./index.html');
        res.end(content);
    }else if(pathname=='/style.css'){
        res.setHeader('Content-Type','text/css');
        var content=fs.readFileSync('./style.css');
        res.end(content);
    }else if(pathname=='/logo.png'){
        res.setHeader('Content-Type','image/png');
        var content=fs.readFileSync('./logo.png');
        res.end(content);
    }else{
        res.end('404');
    }
    //同时发起好几个请求
}).listen(4000);
*/



http.createServer(function(req,res){
    var url =req.url;
    var urls=url.split('?');
    var pathname=urls[0];
    var query=urls[1];
    if( pathname=='/index.html'){
        var content=fs.readFileSync('./index.html');
        res.end(content);
    }else{
        var flag=fs.existsSync('.'+pathname);
        if(flag){
            var content=fs.readFileSync('.'+pathname);
            res.setHeader('Content-Type',mime.lookup(pathname));
            res.end(content);
        }
    }
    //同时发起好几个请求
}).listen(4000);