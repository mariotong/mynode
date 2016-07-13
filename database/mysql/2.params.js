var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'fjxmzl1450',
    database:'blog',
    queryFormat:function(sql,values){
        if(!values) return sql;
        return sql.replace(/@(\w+)/g,function(txt,key){
        	if(values.hasOwnProperty(key)){
        		return connection.escape(values[key]);//转义
        	}
        });
    }
});
connection.connect();
// ??mysql关键字  ？普通的值
var sql="select * from blog_user where user=@username";
var values={username:'zhenglei'};
//console.log(connection.format(sql,values));
connection.query(sql,values,function(err,rows,fields){
	console.log(rows);
})