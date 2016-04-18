/**
 * Created by Administrator on 2016/4/12.
 */
//两种定义的方式
var str='aacbbb';
var reg1=/ab/   //正则直接量
var reg2=new RegExp('ab','igm'); //构造函数方式,第二个参数是模式匹配符
console.log(reg1.test(str));
var reg3=/ab/ig  //模式修正符
console.log(reg3.test(str));
var reg4=/\d+/;
var reg5=new RegExp('\\d');//\在字符串中 表示转义，所以还得在前面加个'\'
//比较灵活
var d='4-9';
var reg6=new RegExp("["+d+"]+")
console.log('\\b');