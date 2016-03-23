/**
 * Created by Administrator on 2016/3/13.
 */
/**
 * Created by Administrator on 2016/3/13.
 */
/**
 * Created by Administrator on 2016/3/13.
 */
/*
 * HTTP 超文本传输协议
 * 资源是通过URL来表示
 * 请求和响应有报文组成
 * */
var http=require('http');
var server=http.createServer();
var url=require('url');
var util=require('util');
var fs=require('fs');
var querystring=require('querystring');
server.on('request',function(req,res){
    var urlObj = url.parse(req.url,false);//如果是true是对象，如果是false就是字符串
    var pathname = urlObj.pathname;
    req.setEncoding('utf8');
    if(pathname == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/post'){
       res.end('post');
    }else if(pathname=='/get'){
        var obj=querystring.parse(urlObj.query);
        console.log(urlObj);
        /*{ protocol: null,
         slashes: null,
         auth: null,
         host: null,
         port: null,
         hostname: null,
         hash: null,
         search: '?username=424514340%40qq.com&email=424514340%40qq.com',
         query: 'username=424514340%40qq.com&email=424514340%40qq.com',
         pathname: '/get',
         path: '/get?username=424514340%40qq.com&email=424514340%40qq.com',
         href: '/get?username=424514340%40qq.com&email=424514340%40qq.com' }
        * */
        console.log(obj);
       // { username: '424514340@qq.com', email: '424514340@qq.com' }
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        console.log(JSON.stringify(obj));
        //{"username":"424514340@qq.com","email":"424514340@qq.com"}
        res.end(JSON.stringify(obj));//必须是一个字符串或者是buffer
    }else{
        res.end('404');
    }
});
server.on('connection',function(){
    console.log('connect');
});
server.on('error',function(e){
    console.log(e);
})
server.listen(8080);