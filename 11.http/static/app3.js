/*
* 断点续传
* 如何让服务器支持断点续传，也就是说支持请求一部分数据
* 1.首先要告诉客户端
* res.setHeader('Accept-Ranges',bytes');
* 2.服务器通过请求头中的
* Range:bytes=1-5来判断是否做range请求
* 如果请求的值有效，返回部分内容，状态码206
*   206 : 'Partial Content',
* 如果请求的值无效，返回416
*   416 : 'Requested Range Not Satisfiable',
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
                var range=req.headers['range'];
                if(range){
                    var rangeObj=parseRange(range,stat.size);
                    res.setHeader('Content-Range','bytes'+rangeObj.start+'-'+rangeObj.end+'/');
                    res.setHeader('Content-Length',(rangeObj.end-rangeObj.start+1));
                    var raw=fs.createReadStream(realPath,rangeObj);
                    res.writeHead(206,{'Content-Type':mime.lookup(realPath),'Accpet-Ranges':'bytes'});
                    raw.pipe(res);
                }else{
                    var raw=fs.createReadStream(realPath);//得到可读流
                    var acceptEncoding=req.headers['accept-encoding'];
                    var matched=ext.match(config.Compress.match);
                    console.log(matched);
                    if(matched){
                        if(acceptEncoding.match(/\bgzip\b/)){
                            res.writeHead(200,'OK',{'Content-Encoding':'gzip','Content-Type':mime.lookup(realPath),'Accept-Ranges':'bytes'});
                            raw.pipe(zlib.createGzip()).pipe(res);
                        }else if(acceptEncoding.match(/\bdeflate\b/)){
                            res.writeHead(200,'OK',{'Content-Encoding':'deflate','Content-Type':mime.lookup(realPath),'Accept-Ranges':'bytes'});
                            raw.pipe(zlib.createDeflate()).pipe(res);
                        }else{
                            res.writeHead(200,{'Content-Type':mime.lookup(realPath),'Accept-Ranges':'bytes'})
                            raw.pipe(res);
                        }
                    }
                }
            }
        })
    }else{
        res.writeHead(200,{
            'Content-Type':mime.lookup(realPath),
            'Accept-Ranges':'bytes'//通过后缀名指定mime类型
        })//  响应客户端，将文件内容发回去
        fs.createReadStream(realPath).pipe(res);
    }
}).listen(8080);
function parseRange(str,size){
    var range=str.spilit('-');
    var start=parseInt(range[0],10);
    var end=parseInt(range[1],10);
    if(isNaN(start)){
        start=0;
    }
    if(isNaN(end)){
        end=size-1;
    }
    return{
        start:start,
        end:end
    }
}
