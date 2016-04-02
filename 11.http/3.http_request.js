
var http=require('http');
//流对象
//req 读流对象
//res 写流对象
/*var server=http.createrServer(function(req,res){
 res.end('hello');
 });*/
//也可以这样写
var server=http.createServer();
var fs=require('fs');
var util=require('util');
var out=fs.createWriteStream('./1.txt');
server.on('request',function(req,res){
    out.write(req.method);
    out.write(req.url);
    out.write(req.httpVersion);
    out.write(util.inspect(req.headers));
    res.end('hello');
});
server.on('connection',function(socket){
    console.log('一个新的连接建立了');
    console.log(socket);
})
//http是在tcp基础上建立的，tcp是传输数据
server.on('close',function(){
    console.log('服务器关闭了');
});
server.on('error',function(){
    console.log('服务器出错了');
})
server.listen(8080);