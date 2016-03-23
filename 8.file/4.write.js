/**
 * Created by Administrator on 2016/3/11.
 */
var fs=require('fs');
fs.open('./zhenglei.txt','w',function(err,fd){
    fs.write(fd,new Buffer('我来自北化'),3,12,0,function(err,bytesWritten){
        console.log('写入成功，写入了'+bytesWritten);
        fs.write(fd,new Buffer('的我'),0,6,null,function(err,bytesWritten){
            console.log('写入成功，写入了'+bytesWritten);
            //当你不确定写入文件的位置，可以用null，自动为你写在后面
        })
    });
});
/*
* fd,
* buffer,
* offset,
* length, 写入的长度
* position, 写入文件的位置
* callback
* */