/**
 * Created by Administrator on 2016/4/15.
 */
MongoClient=require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;
var url='mongodb://127.0.0.1:27017/restful';
exports.insert=function(user,callback){
    MongoClient.connect(url,function(err,db){
        db.collection('user').save(user,function(err,ret){
            db.close();
            callback(null,ret);
        })//得到集合
    })
}
exports.delete=function(_id,callback){
    MongoClient.connect(url,function(err,db){
        db.collection('user').removeOne({_id:new ObjectID(_id)},function(err,ret){
            db.close();
            callback(null,ret);
        })//得到集合
    })
}
exports.list=function(callback){
    MongoClient.connect(url,function(err,db){
        db.collection('user').find({}).toArray(function(err,ret){
            db.close();
            callback(null,ret);
        })
    })
}
exports.update=function(user,callback){
    MongoClient.connect(url,function(err,db){
        db.collection('user').update({_id:new ObjectID(user._id)},{username:user.username,password:user.password},function(err,ret){
            db.close();
            callback(null,ret);
        })//得到集合
    })
}