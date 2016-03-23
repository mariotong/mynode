/**
 * Created by Administrator on 2016/3/13.
 */
//怎么样让客户端输入的值超过10字节的时候，分开存储呢？

var net=require('net');
var util=require('util');
var fs=require('fs');
var count=0;
var out=fs.createWriteStream('./tcp'+count+'.txt');
out.on('finish',function(){
    console.log('finished');
});
var server= net.createServer()
var sockets=[];
server.on('connection',function(socket){
    console.log('connected');
    // console.log(socket);//socket readable的流
    socket.setEncoding('utf8');
    var stat=fs.statSync('./tcp'+count+'.txt');
    if(sta.size>10){
        count++;
        sockets.forEach(function(s){
            s.unpipe(out);//解绑原来输出流
            out=fs.createWriteStream('./tcp'+count+'.txt');
            s.pipe(out,{end:false})//指向新的输出流
        })
    }else{
        socket.pipe(out,{end:false});
    }

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
    });
    setTimeout(function(){
        server.unref();
    },10000);
})
server.listen(8080);