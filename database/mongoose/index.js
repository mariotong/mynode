/**
 * Created by Administrator on 2016/4/4.
 */
var mongoose=require('mongoose');
var assert=require('assert');
var connection=mongoose.createConnection('mongodb://127.0.0.1:27017/admin',function(err){
    //assert.equals(null,err);//当两个参数不相等的时候会报错
});
var Schema=mongoose.Schema;
var ObjectId=Schema.ObjectId;
/*
* 关于ObjectId

 主键，一种特殊而且非常重要的类型，
 每个Schema都会默认配置这个属性，属性名为_id，
 除非自己定义，方可覆盖
* */
//创建自己的模式定义
var AuthorSchema=new Schema({
    name:String
})
var Author=connection.model('Author',AuthorSchema);
//评论
var CommentSchema=new Schema({
    content:String,
    date:Date
})
//文章
var ArticleSchema=new Schema({
    title:{type:String,index:true},
    content:String,
    date:String,
    author:{type:ObjectId,ref:'Author'},//引用别的模型
    stat:{//子文档
        favs:Number,
        visited:Number
    },
    comment:[CommentSchema]//评论数组
});
ArticleSchema.pre('save',function(next){
    //next是否往下继续保存
    this.stat={
        visited:100,
        favs:50
    }
    this.date=new Date();
    next();
});
var Article=connection.model('Article',ArticleSchema);
/*var author=new Author({
    name:'zhenglei'
});
author.save(function(err,result){
    console.log(err);
    console.log(result);
    //_id: 57031de6f5610d3020173f0e
});*/
/*var article=new Article({
 title:'zhenglei6',
 content:'zhenglei6',
 author:'57031de6f5610d3020173f0e',//引用别的模型
 comment:[{content:'comment',date:new Date()}]//评论数组
 });
 article.save(function(err,result){
 console.log(err);
 console.log(result);
 })*/
/*
Article.find({title:'zhenglei'},function(err,result){
    console.log(result);
})*/
//分页
/*var pageNum=2;
var pageSize=3;
Article.count(function(err,total){
    var totalPages=Math.ceil(total/pageSize);
    var skip=(pageNum-1)*pageSize;
    Article.find({}).skip(skip).limit(pageSize).sort({date:1})
        .populate('author').exec(function(err,result){
       console.log(totalPages);
        console.log(result);
    });
});*/
/*Article.update({},{$set:{date:new Date()}},{multi:true},function(err,result){
    console.log(result);
})*/
/*
Article.remove({_id:'57031f3c6e3d53cc1c9b26a5'},function(err,result){
    console.log(result);
})*/
Article.findOne({},function(err,result){
    console.log(result);
})
