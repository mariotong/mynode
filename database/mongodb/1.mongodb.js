/**
 * Created by Administrator on 2016/3/29.
 */
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/zhenglei',function(err,db){
    console.log('连接mongodb数据库成功');
    db.collection('person').save({name:'zhenglei',age:100},function(err,result){
        console.log(result);
        db.close();
    });
})