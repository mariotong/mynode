/**
 * Created by Administrator on 2016/3/23.
 * 如何处理图片防盗链
 * http referer是header一部分
 * 当浏览器向服务器发请求的时候，会带上referer
 * 告诉服务器我从哪里来
 * 可以通过检查请求头refer来
 */
var express =require('express');
//静态资源中间件
var serverStatic=require('serve-static');
var fs=require('fs');
var url=require('url');
var app=express();
app.use(function(req,res,next){
     //console.log('referer',req.url,req.headers.referer);
     next();
});
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
app.use(checkRefer(['www.zhenglei.com','localhost']));//白名单
app.use('/img',serverStatic(__dirname+'/img'));
app.get('/',function(req,res){
     fs.createReadStream('./refer.html').pipe(res);
});
app.listen(8080);
