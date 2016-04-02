/**
 * Created by Administrator on 2016/3/30.
 */
var http=require('http');
var url=require('url');
var server=http.createServer();
var booklist={ 1:{id:1,name:'node'},
    2:{id:2,name:'js'},
    3:{id:3,name:'node.js'}
};
//请求/返回所有的书籍列表
//请求/book?id=?
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);//转成一个对象

    console.log(url.parse(req.url));
    var pathname=urlObj.pathname;
    var queryObj=urlObj.query;
    if(pathname=='/'){
         var result='';
        for(var attr in booklist){
            result+=(booklist[attr].name)+' ';
        }
        res.end(result);
    }else if(pathname=='/book'){
        res.end(booklist[queryObj.id].name);
    }else if(pathname=='/favicon.ico'){

    }
})
server.listen(8080);