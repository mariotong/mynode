/**
 * Created by Administrator on 2016/4/1.
 */
/*
*session 会话
* 进行会话跟踪的，数据存放在服务器端
* 一种机制，而不是一种存储的手段
* */
var http=require('http');
var url=require('url');
var parse=require('./parse')
var cookieUtils=require('./cookieUtils');
var SESSION_KEY='zlkey';
var EXPIRE_TIME=1000*10;
var session={};
http.createServer(function(req,res){
    parse(req);
    var now=Date.now();
    if(req.pathname=='/favicon.ico'){
        res.end('404');
    }else{
        var cookieObj=cookieUtils.parse(req.cookie);
        if(cookieObj[SESSION_KEY]){
             var sessionId=cookieObj[SESSION_KEY];
             var sessionObj=session[sessionId];//判断是否合法
             if(sessionObj&&sessionObj.expTime&&sessionObj.expTime.getTime()>now){
                 sessionObj.num=sessionObj.num-10;
                 sessionObj.expTime=new Date(now+EXPIRE_TIME);
                 res.writeHeader(200,{'Content-Type':'text/html;charset=utf8'});
                 res.end('欢迎你我的老朋友，你现在的余额是'+sessionObj.num+'元');
             }else{
                 var sessionObj={
                     num:100,
                     expTime:new Date(now+EXPIRE_TIME)
                 };
                 var sessionId=now+'_'+Math.random();
                 session[sessionId]=sessionObj;
                 res.writeHeader(200,{'Content-Type':'text/html;charset=utf8',
                     'Set-Cookie':cookieUtils.serialize(SESSION_KEY,sessionId)
                 });
                 res.end('欢迎你我的新朋友,送你'+sessionObj.num+'元的购物券');
            }
        }else{
            var sessionObj={
                num:100,
                expTime:new Date(now+EXPIRE_TIME)
            };
            var sessionId=now+'_'+Math.random();
            session[sessionId]=sessionObj;
            res.writeHeader(200,{'Content-Type':'text/html;charset=utf8',
                'Set-Cookie':cookieUtils.serialize(SESSION_KEY,sessionId)
            });
            res.end('欢迎你我的新朋友,送你'+sessionObj.num+'元的购物券');
        }
    }

}).listen(8080);