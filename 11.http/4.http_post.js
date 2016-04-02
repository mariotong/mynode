
var http=require('http');
var url=require('url');
var fs=require('fs');
var util=require('util');
var querystring=require('querystring')//查询字符串解析的模块
var server=http.createServer();
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    if(pathname=='/'){//表示表单
        fs.createReadStream('./form.html').pipe(res);
    }else if(pathname=='/post'){//接收表体数据
        var formData='';//req是读取的流，获取数据是监听data事件
        req.on('data',function(chunk){
            formData+=chunk;
        });
        req.on('end',function(){
            //现在的formData是一个字符串?usernmae=zhenglei&password=fjxmzl1450
            var obj=querystring.parse(formData);//将字符串转成对象
            res.end(util.inspect(obj));//传回去必须是字符串或者是buffer,所以要将对象转成字符串
            //res.end(obj);不能这样直接返回去
        })
    }else{
        res.end('404')
    }
});
server.on('connection',function(socket){
    console.log('一个新的连接建立了');
    //console.log(socket);
})
server.on('close',function(){
    console.log('服务器关闭了');
});
server.on('error',function(){
    console.log('服务器出错了');
})
server.listen(8080);