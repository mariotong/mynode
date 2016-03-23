/**
 * Created by Administrator on 2016/3/13.
 */
/**
 * TCP
 **/
var net = require('net');
var util = require('util');
var fs = require('fs');


var out = fs.createWriteStream('./tcp.txt');

var server = net.createServer();

server.on('connection', function(socket){
    /*socket.pause();
     setTimeout(function(){
     socket.resume();
     socket.pipe(out,{end:false});
     },50000)*/
    //input keydown
    socket.setTimeout(10*1000);//设置超时时间
    socket.pause();
    //当超时时触发
    socket.on('timeout',function(){
        socket.resume();
        socket.pipe(out);
    });
    socket.on('data',function(){
        socket.pause();
    });
    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    });
});
server.listen(3030);