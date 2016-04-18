/**
 * Created by Administrator on 2016/4/12.
 */
var reg=/\d+/;//多个连续的数字，定义了一个模式
var str='abcdefg';
console.log(reg.test(str));//匹配就会返回一个true，不匹配就是false
str='abc45fg';
console.log(reg.test(str));
//\d 元字符，表示特殊含义都叫元字符，+次数 量词元字符
//\w 常用的字符a-zA-Z0-9_
// \b
// . 小点，除了回车符号之外的所有字符
//? * 0-n 量词  ？0到1次
//^ $ 出现在开头和结尾 /^ $/

//例子
//验证一个完整的数字字符串
var reg=/^\d+$/;//必须要以这个开头
str='abc45fg';
console.log(reg.test(str));
str='88883435';
console.log(reg.test(str));
reg=/^[-+]?[1-9]\d+$/;
str='-084958';
console.log(reg.test(str));
var reg=/^[-+]?[1-19]\d*(\.\d+)?$|^[-+]?0\.\d+$/ //表示浮点数，正数，负数，小分组，就表示元字符，就用\转移
isNaN(Number(str));