/**
 * Created by Administrator on 2016/3/13.
 */
/*
* HTTP 超文本传输协议
* 资源是通过URL来表示
* 请求和响应有报文组成
* */
var http=require('http');
var server=http.createServer();
var url=require('url');
var util=require('util');
server.on('request',function(req,res){
    console.log(req.method);
    console.log(req.httpVersion);
    var headers=req.headers;
    var urlObject=url.parse(req.url,true);
    console.log('request');
    //设置header
    res.setHeader('name','zhenglei');
    res.setHeader('age',7);
    res.statusCode=200;
    res.end(JSON.stringify(headers));
});
server.on('connection',function(){
    console.log('connect');
});
server.on('error',function(e){
    console.log(e);
})
server.listen(3000);