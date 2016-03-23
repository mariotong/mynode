/**
 * Created by Administrator on 2016/3/12.
 */
/*
* TCP
* */
var net=require('net');
var util=require('util');
var fs=require('fs');
var count=0;
var out=fs.createWriteStream('./tcp'+count+'.txt');
out.on('finish',function(){
   console.log('finished');
});
var server= net.createServer();
server.on('connection',function(socket){
    console.log('connected');
    // console.log(socket);//socket readable的流
    socket.setEncoding('utf8');
    socket.pipe(out,{end:false});
 /*   socket.on('data',function(chunk){
        console.log(chunk);
        socket.write('server:'+chunk);
    });*/
    socket.on('end',function(){
        console.log('end');
    });
    socket.on('error',function(){
        console.log('error');
        socket.destroy();
    })
})
server.listen(8080);