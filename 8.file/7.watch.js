/**
 * Created by Administrator on 2016/3/11.
 */
var fs=require('fs');
/*
* 监视文件或目录
* curr fs.Stat
* prev fs.Stat
*
* */
var func1=function(curr,prev){
    console.log(curr)
    if(Date.parse(prev.ctime)==0){
        console.log('文件刚刚创建');
    }else if(Date.parse(curr.ctime)==0){
        console.log('文件刚刚删除')
    }else{
        console.log('文件刚刚修改')
    }
};
fs.watchFile('zhenglei2.txt',{interval:0},func1);