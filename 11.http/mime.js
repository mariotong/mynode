
var http=require('http');
var url=require('url');
var fs=require('fs');
var util=require('util');
var querystring=require('querystring')//查询字符串解析的模块
var server=http.createServer();
/*var testurl='http://localhost:63342/zhenglei?name=zly';
console.log(url.parse(testurl,true));*/
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    var fileName=__dirname+pathname;//path.resolve(__dirname,pathname);path.join(__dirname,pathname);
    fs.exists(fileName,function(exists){
        if(exists){
            res.writeHead(200,{'Content-Type':mime.lookup(filename)});
        }else{
            res.statusCode=404;
            res.end('文件不存在')
        }
    })
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