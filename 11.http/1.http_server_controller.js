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
//路径自然映射方式
var controllers={
    book:{
        add:function(req,res,id,name){
            res.end('add '+id+' '+name+ 'successfully');
        },
        del:function(req,res,id,name){
            res.end('del'+id+'successfully');
        }
    }
}
server.on('request',function(req,res){
    var urlObj=url.parse(req.url,true);//转成一个对象
    var pathname=urlObj.pathname;
    var queryObj=urlObj.query;
    var paths=pathname.split('/');
    console.log(paths);//[ '', 'book', 'add' ]
    var entity=paths[1];
    var action=paths[2];
    var argus=paths.slice(3);
    if(controllers[entity]&&controllers[entity][action]){
        controllers[entity][action].apply(null,[req,res].concat(argus));
    }
})
server.listen(8080);