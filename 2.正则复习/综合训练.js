/**
 * Created by Administrator on 2016/4/13.
 */
//要求：在str字符串中，把所有的完整的时间字符串和年月日时分秒都给我取出来
var str="times is 2016-4-13 16:08:45 :times is 2014-3-34 3:03:36;times is 2012-11-03 12:22:34";
var reg=/(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/g;
function allExec(reg,str){
    if(!reg.global) return reg.exec(str);
    var a=[];
    var result=null;
    while(result=reg.exec(str)){
        a.push(result);
    }
    return a;
}
var a =allExec(reg,str);
console.log(a);
