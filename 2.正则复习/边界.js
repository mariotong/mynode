/**
 * Created by Administrator on 2016/4/13.
 */
var str3='i come from australia';
var reg=/\b[a-z]+\b/g;
var a=str3.match(reg);
console.log(a.length);
var str='woow';//foof dood abba abca
var reg2=/^(\w)(\w)\2\1$/;
console.log(str.match(reg2));
var str='    ';
var reg=/^\s*$/;