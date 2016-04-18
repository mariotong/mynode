/**
 * Created by Administrator on 2016/4/13.
 */
/*
* 请编写一个javascript函数parseQueryStr,它的用途是把URL参数解析为一个对象（或一个JSON字符串）；用法乳
* var obj =parseQueryString(url);例如：www.baidu.com?name=zhenglei&age=20;则obj
* 的值为{name:zhenglei,age:20};
* */
var str="www.baidu.com?name=zhenglei&age=20";
function urlToJSON(str){
    var reg=/([^?=&]+)=([^=?&]+)/g;
    var str1="{"
    var result=null;
    while(result=reg.exec(str)){
        str1+='"'+result[1]+'":"'+ result[2]+'"';
    }
    str1+="}";
    return str1;
}
//返回值是'{"course1":"js","course2":"css"}'
console.log(urlToJSON(str));
var n=str.indexOf('?');
var str1=str.substr(n+1);
console.log(str1);
var a= str1.split("&");
console.log(a);
var strResult="{";
for(var i=0;i<a.length;i++){
    var tempa=a[i].split("=");
    strResult+='"'+tempa[0]+'":"'+ tempa[1]+'"';

}
strResult+="}";
console.log(strResult);