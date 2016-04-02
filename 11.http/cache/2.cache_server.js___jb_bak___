/*
*etag
* 1.第一次的时候，服务器会把此文件生成etag,发给客户Etag
* 2.再次请求的时候，客户端会把这tag传回来，if-none-match
* 3.服务器进行判断，相同则返回304，不相同返回最新文件
*
* */
var fs=require('fs');
var http=require('http');
var crypto=require('crypto');
function etagHandler(filename,req,res){
    fs.readFile(filename,function(err,content){
        var hash=getHash(content);
        var match=req.headers['if-none-match'];
        if(hash==match){
            res.statusCode=304;
            res.end('');
        }else{
            res.setHeader('ETag',hash);
            res.writeHeader(200,'OK');
            fs.createReadStream(filename).pipe(res);
        }
    })
}
function getHash(content){
    return crypto.createHash('sha1').update(content).digest('hex');
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
    etagHandler(filename,req,res);
}).listen(3000);