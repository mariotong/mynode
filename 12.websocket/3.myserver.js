/**
 * Created by Administrator on 2016/3/24.
 */
var url=require('url');
var http=require('http');
var crypto=require('crypto');
var util=require('util');
var EventEmitter=require('events').EventEmitter;
util.inherits(WebSocketServer,EventEmitter);
function shaKey(key){
    var shasum=crypto.createHash('sha1');//对随机串进行加密
    shasum.update(key+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
    return shasum.digest('base64');
}
function WebSocketServer(options,callback){
    var self=this;
    this._server=http.createServer(function(req,res){
        res.end('not implemented');
    });
    this._server.listen(options.port,options.host);
    this._server.on('upgrade',function(req,socket,upgrade){
        self.socket=socket;
        socket.setEncoding('utf8');
        var key=req.headers['sec-websocket-key'];
        key=shaKey(key);
        var headers = [
            "HTTP/1.1 101 Switching Protocols",
            "Upgrade: websocket",
            "Connection: Upgrade",
            "Sec-WebSocket-Accept: "+key
        ];
        socket.write(headers.concat('','').join('\r\n'));
        socket.on('data',function(data){
            self.emit('message',data);
        })
    })
}
WebSocketServer.prototype.send=function(data){
    this.socket.write(data);
};
var wss=new WebSocketServer({port:8080});
//服务器监听客户端的消息
wss.on('message',function(data){
    console.log('received:%s',data);
    //服务器想客户端发信息
    wss.send('server hello');
});
