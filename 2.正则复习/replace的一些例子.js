var str='my name is zhenglei ii from buct 20 years old';
var obj={};
//获取每一个字符出现的次数
str.replace(/[a-z]/gi,function(){
    var val=arguments[0];
    obj[val]>=1?obj[val]+=1:obj[val]=1;
});
console.log(obj);
//求里面出现次数最多的字母
var maxNum=0;
for(var key in obj){
    obj[key]>maxNum?maxNum=obj[key]:null;
}
//把所有符合出现maxNum次数的都获取到
var ary=[];
for (var key in obj){
    obj[key]===maxNum?ary.push(key):null;
}
console.log('整个字符串中出现次数最多的字符是:'+ary.join('和')+'~一共出现了'+maxNum+'次')


//将首字母转化成大写
var reg2=/\b[a-z]/g;
var str3=str.replace(reg2,function(s){
    return s.toUpperCase();
});
console.log(str3);