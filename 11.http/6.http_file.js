
var http=require('http');
var url=require('url');
var fs=require('fs');
var util=require('util');
var querystring=require('querystring')//查询字符串解析的模块
var server=http.createServer();
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    var fileName=__dirname+pathname;
});
server.on('connection',function(socket){
    console.log('一个新的连接建立了');
})
server.on('close',function(){
    console.log('服务器关闭了');
});
server.on('error',function(){
    console.log('服务器出错了');
})
server.listen(8080);