/**
 * Created by Administrator on 2016/4/14.
 */
var http=require('http');
//Request URL:https://www.baidu.com/
//Request Method:GET
var fs=require('fs');
var path=require('path');
var mime=require('mime');
var db=require('./db');
var url=require('url');
var server=http.createServer(function(req,res){
    var method=req.method;
    var urlObj=url.parse(req.url,true);//true表示把查询字符串解析成一个对象
    var pathname=urlObj.pathname;
    if(pathname=='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/users'){
        db.list(function(err,ret){
            res.end(JSON.stringify(ret));
        })
    }else if(pathname=='/user'){
        var userData=[];
        req.on('data',function(data){
            userData=JSON.parse(data.toString());
        });
        switch(method){
            case 'POST':
                req.on('end',function(err){
                    db.insert(userData,function(err,ret){
                        db.list(function(err,ret){
                            res.end(JSON.stringify(ret));
                        })
                    })
                })
                break;
            case 'DELETE':
                req.on('end',function(err){
                    db.delete(urlObj.query._id,function(err,ret){
                        db.list(function(err,ret){
                            res.end(JSON.stringify(ret));
                        })
                    })
                })
                break;
            case 'PUT':
                req.on('end',function(err){
                    console.dir(userData);
                    db.update(userData,function(err,ret){
                        db.list(function(err,ret){
                            res.end(JSON.stringify(ret));
                        })
                    })
                })
                break;

        }
    }else{
        res.writeHead(200,{'Content-Type':mime.lookup(pathname)});
        fs.exists(path.join(__dirname,pathname),function(exists){
            if(exists){
                fs.createReadStream(path.join(__dirname,pathname)).pipe(res);
            }else{
                res.end('404');
            }
        })
    }
});
server.listen(3000);
