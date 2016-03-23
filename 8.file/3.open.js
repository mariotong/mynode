/**
 * Created by Administrator on 2016/3/11.
 */
/*
* 如何从指定的位置开始读取文件
*  fd 是打开文件的索引
*  0 stdin 标准输入
*  1 stdout 标准输出
*  2 stderr 错误输出
* */
var fs=require('fs');
fs.open('./write.txt','r',function(err,fd){
    var buffer =new Buffer(12);
    fs.read(fd,buffer,0,6,6,function(err,bytesRead,buffer){
        console.log(bytesRead);
        console.log(buffer);
        fs.read(fd,buffer,6,6,24,function(err,bytesRead,buffer){
            console.log(buffer.toString());
        })
    })
});
/*
可以多次读取，一次读取一小部分
 fs.read();
 *fd, 文件的描述符
 * buffer,读到那个buffer里
 * offset, 读到那个buffer上的偏移量
 * length, 写多少个字节
 * position, 从要读取的文件的哪个位置开始读
 * callback ，回调函数
 */
