/**
 * Created by Administrator on 2016/3/11.
/*
 * buffer暂时存放输入输出数据的一段内存
 * 全局对象
 *
 */
//创建buffer对象的三种方法
//new Buffer(size)
var buf1=new Buffer(12);
console.log(buf1);
//<Buffer 6f 6c 00 00 00 00 00 00 f0 a5 1f 40>内存随机分配
//清空
buf1.fill(0);
console.log(buf1);
//数组方式
var buf2=new Buffer([1,2,3]);
console.log(buf2)//<Buffer 01 02 03>
//字符串来创建
var buf3=new Buffer('我是郑磊');
//utf8 一个汉字对应3个字节
console.log(buf3);
//字符串和buffer的长度
var str='我叫郑磊';
var buf= new Buffer(str);
console.log(buf);
console.log(str.length);
console.log(buf.length);//4*3=12,注英文字母只需要一个字节

//字符串不可修改，buf可以修改
str[0]='你';
console.log(str);//没有变化，字符串是只读的
buf[0]=1;
console.log(buf);//类似于数组
//slice
var substr=str.slice(1,2);
console.log(substr)//叫
var subb=buf.slice(1,2);
console.log(buf);
console.log(subb);
//buffer 字符串
var buf=new Buffer('我叫郑磊');
console.log(buf.toString('utf8',6,12))
//写入buffer
/*
* string  写入的值
* offset  写入buffer的偏移量
* length  写入字节的长度
* eccoding  编码的格式
* */
var buf4=new Buffer(12);
buf4.write('zhenglei',0,6,'utf8');
buf4.write('好帅',6,6,'utf8');
console.log(buf4.toString());
//乱码的处理
var buf5=new Buffer('郑磊有才');
console.log(buf5);
var buf1=buf5.slice(0,7);
var buf2=buf5.slice(7);
console.log(buf1);
console.log(buf2);
console.log(buf1.toString());
console.log(buf2.toString());
//StringDecoder
var StringDecoder=require('string_decoder').StringDecoder;
var decoder=new StringDecoder();
console.log(decoder.write(buf1));
console.log(decoder.write(buf2));
//Number 双精度的Double
//value,offset
var buf=new Buffer(4);
buf.writeInt8(0,0);
buf.writeInt8(16,1);
buf.writeInt8(32,2);
buf.writeInt8(64,3);
console.log(buf);
console.log(buf.readInt8(0));
console.log(buf.readInt8(1));
console.log(buf.readInt8(2));
console.log(buf.readInt8(3));

var buf=new Buffer(4);
/*
*  高位字节 地位字节
*  big 高位在前
*  litte 地位在前
* */
buf.writeInt16BE(1119,0);
buf.writeInt16BE(1199,2);
console.log(buf);//<Buffer 04 5f 04 af>
buf.writeInt16LE(1119,0);
buf.writeInt16LE(1199,2);
console.log(buf);//<Buffer 5f 04 af 04>

//复制缓存
/*
* targetBuffer,目标buffer
* targetStart, 目标的起始位置
* sourceStart, 源的起始位置
* sourceEnd, 源的结束位置
*
* */
var srcBuf=new Buffer([4,5,6]);
var tarBuf=new Buffer(6);
tarBuf[0]=1;
tarBuf[1]=2;
tarBuf[2]=3;
srcBuf.copy(tarBuf,3,0,3)//包前不包后
console.log(tarBuf);//<Buffer 01 02 03 04 05 06>
//判断是否是buffer对象
console.log(Buffer.isBuffer(srcBuf))//true
//返回字符传的字节数
console.log(Buffer.byteLength('我喜欢'));//9
console.log(Buffer.isEncoding('utf8'))//true













