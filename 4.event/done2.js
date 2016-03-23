/**
 * Created by Administrator on 2016/3/10.
 */
var fs=require('fs');
var EventEmitter=require('events').EventEmitter;
var user={};
var count=0;
var e=new EventEmitter();
e.on('name',done);
e.on('age',done);
function done(key,value){
    user[key]=value;
    if(++count==2) {
        console.dir(user);
    }
}
fs.readFile('./name.txt','utf8',function(err,data){
    e.emit('name','name',data)
});
fs.readFile('./age.txt','utf8',function(err,data){
    e.emit('age','age',data)
});
/*
fs.readFile('./name.txt',function(err,data){
    user['name']=data;
});
fs.readFile('./age.txt',function(err,data){
    user['age']=data;
});
console.dir(user);//异步，输出空对象{ }
*/
//只能这样搞导致代码不好看
/*
fs.readFile('./name.txt','utf8',function(err,data){
    user['name']=data;
    fs.readFile('./age.txt','utf8',function(err,data){
        user['age']=data;
        console.dir(user);
    });
});
*/



