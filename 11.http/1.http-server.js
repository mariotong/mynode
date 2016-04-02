/**
 * Created by Administrator on 2016/3/29.
 */
/**
 * HTTP hypertext transfer protocal
 * 1xx 信息响应，表示已经接收到请求，请继续等待
 * 2xx 处理成功响应，表示动作被接受，理解和处理
 * 3xx 重定向 为了完成响应，要求客户端进行进一步处理，301永久充定向
 * 4xx 客户端错误 客户端语法错误或请请求
 * 5xx 服务器错误 服务器不能正常处理
 */
var http=require('http');
//流对象
//req 读流对象
//res 写流对象
/*var server=http.createrServer(function(req,res){
    res.end('hello');
});*/
//也可以这样写
var server=http.createServer();
server.on('request',function(req,res){
    res.end('hello');
});
server.on('connection',function(socket){
    console.log('一个新的连接建立了');
    console.log(socket);
})
//http是在tcp基础上建立的，tcp是传输数据
server.on('close',function(){
    console.log('服务器关闭了');
});
server.on('error',function(){
    console.log('服务器出错了');
})
server.listen(8080);