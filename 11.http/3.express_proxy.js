
var express=require('express');
var serverStatic=require('serve-static');
var httpProxy=require('http-proxy');
var forwarded=require('forwarded');
var fs=require('fs');
var url=require('url');
var app=express();
function proxyPass(host,target){
    var targetHost=url.parse(target).host;
    var proxy=httpProxy.createProxyServer();//请求时触发
    proxy.on('proxyReq',function(proxyReq,req,res,options){
        //proxyReq是真实的请求
         proxyReq.setHeader('Host',targetHost);
         proxyReq.setHeader('X-Real-IP',forwarded(req))
    });
    proxy.on('proxyRes',function(proxyRes,req,res,options){
        res.setHeader('X-Proxy-By','node.js');
    });
    return function(req,res,next){
        var currentHost=req.headers.host.split(':')[0];
        if(currentHost==host){
               proxy.web(req,res,{
                   target:target
               }) ;
        }else{
            next();
        }
    }
}
app.use(proxyPass('zhenglei.baidu.com','http://www.baidu.com'));
app.use(proxyPass('zhenglei.taobao.com','http://www.taobao.com'));
app.use(proxyPass('zhenglei.qq.com','http://www.qq.com'));
app.listen(80);
