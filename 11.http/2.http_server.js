/**
 * Created by Administrator on 2016/3/13.
 */
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
var fs=require('fs');
server.on('request',function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname='/post'){
        var result = [];
        req.on('data',function(data){
            result.push(data);
        });
        req.on('end',function(){
            console.log(result);
            res.end(Buffer.concat(result));
        });
    }else{
        res.end('404');
    }
});
server.on('connection',function(){
    console.log('connect');
});
server.on('error',function(e){
    console.log(e);
})
server.listen(8080);