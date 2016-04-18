/**
 * Created by Administrator on 2016/4/13.
 */
/*
*用exec 把正则匹配到的内容找到并保存下来就叫捕获
* i 为不区分大小写
* */
var reg=/b/;
console.log(reg.global);
var str="www.baidu.com/bbs2016";
var result=reg.exec(str);
console.log(result);

function allExec(reg,str){
    if(!reg.global) return reg.exec(str);
    var a=[];
    var result=null;
    while(result=reg.exec(str)){
        a.push(result);
    }
    return a
}
console.log(allExec(reg,str));

var a=str.match(reg);
console.log(a);//更快速[ 'b', 'b', 'b' ]