/**
 * Created by Administrator on 2016/3/28.
 */
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'fjxmzl1450',
    database:'blog',
    queryFormat:function(query,values){
        return query.replace()
    }
});
connection.connect();
var sql='select * from blog_user';
connection.query(sql,function(err,rows,fields){
    if(err){
        throw err;
    }else{
        console.log(rows);
    }
})