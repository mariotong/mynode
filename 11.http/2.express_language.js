
var express=require('express');
/*
* 如何在node中实现多语言
* 通过请求头中的Accept-Language来检测浏览器的语言
* Accept-Language:zh-CN,zh;q=0.8
* */
var serverStatic=require('serve-static');
var fs=require('fs');
var url=require('url');
var app=express();
function checkRefer(whiteList){
    return function(req,res,next){
        var referer = req.headers.referer;
        if(!referer) return next();
        console.log(referer,'referer');//http://www.zhenglei2.com:8080/
        var host = url.parse(referer,true).host;
        console.log(url.parse(referer,true),'parseReferer');
        console.log(host,'host');
        host = host.split(':')[0];
        if(whiteList.indexOf(host)!=-1){
            next();
        }else{
            res.sendfile('./img/no.png');
        }
    }
}
//选择合适的语言
/*
* 客户端那些语言
* 服务端有那些语言
* */
function checkLanguage(lans){
    var defaultLan=lans[0].toLowerCase();//默认语言
    return function(req,res,next){
        var acceptLans=req.headers['accept-language'];
        var orderedLans=[];
        acceptLans.split(',').forEach(function(lan){
           orderedLans.push(lan.split(';')[0]);
        });
        for(i=0;i<orderedLans.length;i++){
            if(lans.indexOf(orderedLans[i])!=-1){
                req.selectedLan=orderedLans[i];
                next();
                return;
            }
        }
        req.selectedLan=defaultLan;
        next();
    }
}
app.use(checkLanguage(['zh-cn','en']))
//app.use(checkRefer(['www.zhenglei.com','localhost']));//白名单
app.get('/',function(req,res){
    fs.createReadStream('./lan/'+req.selectedLan+'/index.html').pipe(res);

});
app.listen(8080);
