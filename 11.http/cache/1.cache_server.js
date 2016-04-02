/**
 * Created by Administrator on 2016/4/2.
 */
/*
* 缓存把常用的东西缓存起来，加快加载的速度
* expire 设置一个键为Expires header 值
* 是一个GMT格式的字符串，浏览器接收到此值后，只要本地有这个文件，到期之前不发请求
* max-age 多长时间之后过期
* max-age 会覆盖expires的设置
* */
var fs=require('fs');
var http=require('http');
function expireHandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        var expires=new Date(new Date().getTime()+30*1000);
        res.setHeader('Expires',expires.toUTCString());//http1.0
        res.setHeader('Cache-Control','max-age=60');//http1.1
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.writeHead(200,'OK');
        res.end(content);
    })
}
/*
*1.第一次发起请求的时候，服务器会返回客户端一个Last—Modified header,最后的修改时间
* 2.当客户端再次需要请求该文件的时候，会把这个时间发给服务请，
* 3.服务器判断，如果修改过返回最新数据，如果没修改过返回304
* */
function matchHandler(filename,req,res){
    var lastModified=new Date(req.headers['if-modified-since']);
    fs.stat(filename,function(err,stat){
        console.log(stat.mtime,lastModified);
        //因为lastModified 转化为date 所以getTime()是整数
        if(Math.floor(stat.mtime.getTime()/1000)==Math.floor(lastModified.getTime()/1000)){
            res.statusCode=304;
            res.end(' ');
        }else{
            res.setHeader('Content-Type','text/html;charset=utf8');
            res.setHeader('Last-Modified',stat.mtime.toGMTString());
            res.writeHead(200,"OK");
            fs.createReadStream(filename).pipe(res);
        }
    })
}
http.createServer(function(req,res){
    // /1.txt
    console.log(req.url);
    console.log(req.headers['if-modified-since']);
    if(req.url=='/favicon.ico'){
        return res.end('404');
    }
    var filename = req.url.slice(1);
    //expireHandler(filename,req,res);
    matchHandler(filename,req,res);
}).listen(3000);

//这种方法的缺点是
//1.只能精确到秒，不够精确
//2.修改时间改了，内容不一定改