/**
 * Created by Administrator on 2016/4/1.
 */
var http=require('http');
var options={
    host:'www.baidu.com',
    port:'80',
    path:'/',
    method:'get'
}
var req=http.request(options,function(res){
    console.log(res.statusCode);
    console.log(JSON.stringify(res.headers));
   // res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk.toString());
    });
    res.on('end',function(){

    })
})
req.setTimeout(1000,function(){
    req.abort();
});
req.on('error',function(error){
    console.log(error);
})
req.end();