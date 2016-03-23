/**
 * Created by Administrator on 2016/3/11.
 */
var fs=require('fs');
/*
*  path 读取的文件路径
*  callback 回调函数
* */
fs.readFile('zhenglei.text',function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data)
        //<Buffer e6 88 91 e6 98 af e9 83 91 e7 a3 8a>
        //16进制
    }
})