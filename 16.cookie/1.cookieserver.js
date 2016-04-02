/*
* cookie是服务器向客户端发送的一段文本
* 1.服务器发给客户端
* 2.客户端以key-value的形式进行保存（内存或硬盘）
* Cookie:college=buct; sex=man
* 3.以后每次请求的时候，客户度会有选择的把保存的cookie发给服务器
* 它的目的是让服务器能够在多个HTTP请求之间跟踪客户度昂
* */

/*设置cookie的标准格式name=zhenglei;path=/;domain=localhost
* Domain localhost  //localhost
* 指定cookie被发送到那些服务器上。默认情况下，只发送到写cookie的服务器上
* Path  //控制那些路劲 能够发送cookie,如果没有指定，则所有的path都可以访问
* Expires/max-Age //最长成活时间
* Size   大小
* HTTP    只能在http里看到，不能通过document.cookie 看到
* Secure   只能用在https
* */

/*
* cookie的问题
* 1.可以在客户端document.cookie='isvip=1'进行篡改，所以不安全，私密数据得不到保护
* 2.他是在每次浏览器请求服务器的时候通过请求体带过去的，所以你设置很多cookie时，
* 浪费带宽
* 使用建议
* 1.不要完全信任客户端提交的cookie值，要做服务器端的校验，
* 2.不要存储私密数据
* 3.最好设置httpOnly,这样document.cookie读取不到
* 4.设置正确的使用范围 domain  ,缩小范围
* 5.尽可能节约体积，不要存储过多的数据
* 6.apche 默认请求头大小不能超过8190字节 请求头请求体
*
* */
 var http=require('http');
var parse=require('./parse');
var cookieUtils=require('./cookieUtils');
var SET_COOKIT='Set-Cookie';
http.createServer(function(req,res){
     parse(req);
    if(req.pathname=='/favicon.ico'){
        res.end('404');
    }else if(req.pathname=='/write'){
        //res.setHeader(SET_COOKIT,'name=zhenglei;age=6');
        //res.setHeader(SET_COOKIT,'college=buct;sex=man;path=/read;HttpOnly;Max-Age=60');
        //res.setHeader(SET_COOKIT,'college=buct;sex=man;path=/read;HttpOnly;Max-Age=60;Expires='+new Date(new Date().getTime()+10*1000).toUTCString()+'');
        res.setHeader(SET_COOKIT,[cookieUtils.serialize('isVip','0',{
        })])
        res.end('hello');
    }else if(req.pathname=='/read'){
        res.setHeader('Content-Type','text/html;charset=utf8')
        var isVip=cookieUtils.parse(req.headers.cookie).isVip-0;
        res.end(isVip?'你是尊贵的vip用户':'你只是一个普通的游客')
    }else if(req.pathname=='/read1'){
        res.end(req.headers.cookie);
    }else{
        res.end('404');
    }
}).listen(8080);
