
var http=require('http');
var url=require('url');
var fs=require('fs');
var util=require('util');
var querystring=require('querystring')//查询字符串解析的模块
var server=http.createServer();
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname!='/favicon.ico'){
        res.setHeader('name','zfpx');
        console.log(res.headerSent);
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.statusCode=200;
        res.sendDate=false;
        res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
        res.end('hello');//getHeader setHeader removeHeader
    }
});
server.on('connection',function(socket){
    console.log('一个新的连接建立了');
    //console.log(socket);
})
server.on('close',function(){
    console.log('服务器关闭了');
});
server.on('error',function(){
    console.log('服务器出错了');
})
server.listen(8080);