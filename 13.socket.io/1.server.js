/**
 * Created by Administrator on 2016/3/26.
 */
var path=require('path');
var express=require('express');
var app=express();
var fs=require('fs');
var serveStatic=require('serve-static')
var server=require('http').createServer(app);
var io=require('socket.io')(server);
app.use(serveStatic(path.join(__dirname,'public')));
app.get('/',function(req,res){
    fs.createReadStream('./2.index.html').pipe(res);
});
io.on('connection',function(socket){
    console.log('用户已经连接');
    socket.on('error',function(err){
       console.log(err);
        addMsg(err);
    });
    socket.on('disconnect',function(){
        console.log('用户已经断开');
    });
    socket.on('message',function(msg){
        console.log('client:'+msg);
        io.send(msg)
        //io.emit('message',msg);//向所有的客户端发送消息
    })
})
server.listen(8080)