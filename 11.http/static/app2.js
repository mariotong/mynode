/**
 * Created by Administrator on 2016/3/25.
 */
/*
* Accept-Encoding:gzip, deflate, sdch
* 服务器压缩文件
* */
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
var zlib=require('zlib');
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
            }
        })
    }else{
        var raw=fs.createReadStream(realPath);//得到可读流
        var acceptEncoding=req.headers['accept-encoding'];
        var matched=ext.match(config.Compress.match);
        console.log(matched);
        if(matched){
            if(acceptEncoding.match(/\bgzip\b/)){
                res.writeHead(200,'OK',{'Content-Encoding':'gzip','Content-Type':mime.lookup(realPath)});
                raw.pipe(zlib.createGzip()).pipe(res);
            }else if(acceptEncoding.match(/\bdeflate\b/)){
                res.writeHead(200,'OK',{'Content-Encoding':'deflate','Content-Type':mime.lookup(realPath)});
                raw.pipe(zlib.createDeflate()).pipe(res);
            }else{
                raw.pipe(res);
            }
        }
    }
}).listen(8080);

