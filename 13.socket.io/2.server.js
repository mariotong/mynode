
var path=require('path');
var express=require('express');
var app=express();
var fs=require('fs');
var serveStatic=require('serve-static')
var server=require('http').createServer(app);
var io=require('socket.io')(server);
app.use(serveStatic(path.join(__dirname,'public')));
app.get('/',function(req,res){
    fs.createReadStream('./3.index.html').pipe(res);
});
var users={};
io.on('connection',function(socket){
    var username;
    socket.send({user:'SYSTEM',content:'请注意，第一次发言输入的是昵称'});
    socket.on('disconnect',function(){
        console.log('用户已经断开');
    });
    //监听客户端的message事件
    socket.on('message',function(message){
        if(username){
            var result=message.match(/^@(.+)\s(.*)/);
            if(result){
                var toUser=result[1];
                var msg=result[2];
                if(users[toUser]){
                    users[toUser].send({user:username,content:'（他跟你在私聊）'+msg})
                    socket.send({user:username,content:'（我跟'+toUser+'私聊）'+msg})
                }else{
                    socket.send({user:'SYSTEM',content:'你要私聊的不在线'});
                }
            }else{
                io.send({user:username,content:message});
            }
        }else{
            username=message;
            users[username]=socket;
            io.send({user:'SYSTEM',content:'欢迎'+username+'加入聊天室'});
        }
        //io.emit('message',msg);//向所有的客户端发送消息
    })
})
server.listen(80)