/**
 * Created by Administrator on 2016/3/23.
 */
var WebSocketServer=require('ws').Server;
var wss=new WebSocketServer({port:8080});
//客户端连接上服务器之后触发的事件
wss.on('connection',function(ws){
    //服务器监听客户端的消息
    ws.on('message',function(message){
        console.log('received:%s',message);
        //服务器想客户端发信息
        ws.send('server hello');
    });
});
wss.on('error',function(err){
    console.log(err);
});