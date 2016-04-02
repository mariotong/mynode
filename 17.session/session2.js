//X-Forwarded-For:简称XFF头，它代表客户端，也就是HTTP的请求端真实的IP
/*
 这一HTTP头一般格式如下:
 X-Forwarded-For: client1, proxy1, proxy2, proxy3
 其中的值通过一个 逗号+空格 把多个IP地址区分开, 最左边(client1)是最
 原始客户端的IP地址, 代理服务器每成功收到一个请求，就把请求来源IP地址
 添加到右边。 在上面这个例子中，这个请求成功通过了三台代理服务器：
 proxy1, proxy2 及 proxy3。请求由client1发出，到达了proxy3(proxy3可能
 是请求的终点)。
 * */
/*
 * 用户代理 User Agent，是指浏览器,它的信息包括硬件平台、系统软件、
 * 应用软件和用户个人偏好。在X．400电子系统中，用户代理是一种对数据
 * 打包、创造分组头，以及编址、
 * 传递消息的部件。用户代理并不是仅指浏览器，还包括搜索引擎。
 *
 * */
var http=require('http');
var url=require('url');
var crypto=require('crypto');//用来加密和解密的
var parse=require('./parse')
var cookieUtils=require('./cookieUtils');
var SESSION_KEY='zlkey';
var EXPIRE_TIME=1000*10;
var session={};
var PWD='zhenglei';
http.createServer(function(req,res){
    parse(req);
    var userAgent=req.headers['x-forwarded-for']+req.headers['userAgent'];
     var now=Date.now();
    if(req.pathname=='/favicon.ico'){
        res.end('404');
    }else{
        var cookieObj=cookieUtils.parse(req.cookie);
        if(cookieObj[SESSION_KEY]){
            var sessionId=cookieObj[SESSION_KEY];
            sessionId=unsign(sessionId);
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
                sessionId=sign(sessionId);
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
            sessionId=sign(sessionId);
            res.writeHeader(200,{'Content-Type':'text/html;charset=utf8',
                'Set-Cookie':cookieUtils.serialize(SESSION_KEY,sessionId)
            });
            res.end('欢迎你我的新朋友,送你'+sessionObj.num+'元的购物券');
        }
    }
    //对sessionId进行加密
    function sign(val){
        return val+"@"+crypto.createHmac('sha256',PWD+userAgent)
                .update(val).digest('hex');
    }
    //对sessionId进行解密
    function unsign(val){
        var str=val.slice(0,val.lastIndexOf(encodeURIComponent('@')));
        return sign(str)==val?str:false;
    }
}).listen(8080);