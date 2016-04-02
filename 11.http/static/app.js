/**
 * Created by Administrator on 2016/3/25.
 */
/*
* 构建自己的静态文件
* */

var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var mime=require('mime');
var config=require('./config.js');
var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/favicon.ico'){
        return res.end('404');
    }
    if(pathname.slice(-1) == '/'){
        pathname+='index.html';
    }
    var realPath=path.join('public',pathname);
    var ext=path.extname(realPath);//扩展名
    if(ext.match(config.CachedType.fileMath)){
        fs.stat(realPath,function(err,stat){
            var lastModified=stat.mtime.toUTCString();
            if(req.headers['if-modified-since']&&req.headers['if-modified-since']==lastModified){
                res.writeHead(304);
                return res.end(http.STATUS_CODES[304]);
                //当再次访问的时候
                /*
                响应状态码是304就说明是已经缓存了
                请求头
                 Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,;q=0.8
                Accept-Encoding:gzip, deflate, sdch
                Accept-Language:zh-CN,zh;q=0.8
                Cache-Control:max-age=0
                Connection:keep-alive
                Host:localhost:8080
               就是这个 If-Modified-Since:Sun, 30 Aug 2015 10:06:59 GMT
                User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36
                 */
            }else{
                //getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。
                var expires=new Date(new Date().getTime()+config.CachedType.maxAge*1000)
                res.setHeader('Expires',expires.toUTCString());
                res.setHeader('Cache-Control','max-age='+config.CachedType.maxAge*1000);
                res.setHeader('Last-Modified',lastModified);
                res.writeHead(200,{
                    'Content-Type':mime.lookup(realPath)//通过后缀名指定mime类型
                })//  响应客户端，将文件内容发回去
                fs.createReadStream(realPath).pipe(res);
                /*
                 当访问localhost:8080/baidu.png
                 Cache-Control:max-age=30000
                 Connection:keep-alive
                 Content-Type:image/png
                 Date:Fri, 25 Mar 2016 03:18:51 GMT
                 Expires:Fri, 25 Mar 2016 03:19:21 GMT
                 Last-Modified:Sun, 30 Aug 2015 10:06:59 GMT
                 Transfer-Encoding:chunked
                 */
            }
        })
    }else{
        res.writeHead(200,{
            'Content-Type':mime.lookup(realPath)//通过后缀名指定mime类型
        })//  响应客户端，将文件内容发回去
        fs.createReadStream(realPath).pipe(res);
    }
}).listen(8080);
/*
var queryUrl = "http://localhost:8888/aa/" ;
var pathname=url.parse(queryUrl).pathname;
pathname+='index.html';
console.log(path.join('public',pathname));
*/
