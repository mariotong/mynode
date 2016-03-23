/**
 * Created by Administrator on 2016/3/12.
 */
/*
*  1.readFile readFileSync 文件作为整体
*  2.read 一小块一小块读取
*  3.有些时候我们不知道大小，而且也不关心大小
*  只关心何时读到数据以及如何，何时结束
*  4.流是一组有序的，有起点和终点的字节传输手段
*  5.一个字节一个编码，这样才能传输数据
*  6.我们使用stream.Readabale 接口的对象来讲对象转成流数据
*  7.常用的可读流
*     fs.readStream 读取文件流
*     http.IncomingMessage 客户端请求对象
*     net.Socket TCP客户端
*     gzip deflat 数据压缩流
* */
/*
 ReadStream<Readable<Stream
* path, 文件路径
 *options，选项
 * fd  文件的索引
 * flags 打开方式 默认为'r'
 * mode  权限 默认为438;// =0666
 * start 文件的起始位置
 * end   文件的结束位置
 * autoClose 是否自动关闭
* */
/*
* 读取流分为两种读取模式
* 流动模式  迫使操作系统尽快读出数据
* 非流动模式（也叫暂停模式） 通过代码去读取
* */
var fs=require('fs');
var rs=fs.createReadStream('zhenglei')//只有这个地方是包后的，
//文件打开时触发
rs.on('open',function(data){
   console.log('open');
});
rs.resume();//打开水龙头，监听data事件就是在桶下面放一个水杯
setTimeout(function(){
   rs.on('data',function(){
      console.log('data')//这样数据就会丢失
   });
},5000);
/*rs.pause();
setTimeout(function(){
    rs.resume();
},5000)*/
//读到数据时触发
/*rs.on('data',function(data){
   console.log('data');
});*/
//当读以文件末尾时触发
rs.on('end',function(data){
   console.log('end')
});
//当文件关闭的时候触发
rs.on('close',function(data){
    console.log('close');
})
