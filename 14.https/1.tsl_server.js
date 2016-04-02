/**
 * Created by Administrator on 2016/3/26.
 */
/*
* 1.生成证书服务器的私钥
* openssl genrsa -out ./ca/ca.key 1024
* 2.生成证书服务器的csr
*
* */
var tls=require('tls');
var fs=require('fs');
var options={
    key:'',//服务器的私钥
    cert:'',//服务器的证书
    ca:''//指定合法的证书机构
}
var server=tls.createServer(options,function(socket){
    socket.write('hello');
    socket.setEncoding('utf8');
    socket.pipe(socket);
});