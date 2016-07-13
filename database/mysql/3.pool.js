var mysql=require('mysql');
/*
创建并管理缓存池的技术
1.减少链接时间
2.简化编程模型
3.受控的资源引用
*/
var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'fjxmzl1450',
    database:'blog',
    connectionLimit:2,//链接池 最多可以创建几个链接
    queueLimit:1//等待队伍中最多有几个链接
});
pool.on('connection',function(){
    console.log('一个新的连接被创建');
});
pool.on('enqueue',function(){
	console.log('等待');
});
pool.on('error',function(err){
	console.log(err);
})
console.time('cost');
function start(){
	//最大并发是两个链接，队伍里最多是8个等待
	pool.getConnection(function(err,connection){
		if(err){
			return console.error(err);
		}
		connection.query("select * from blog_user",function(err,rows,fields){
			console.log(rows.length);
			console.timeEnd('cost');//1秒多一点点
			setTimeout(function(){
				connection.release();
			},1000)
		});
    });
}
start();
start();
start();
start();