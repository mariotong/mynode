/**
 * Created by Administrator on 2016/4/21.
 */
//写一个字符串转成驼峰的方法？
//第一种方法
var str='border-bottom-color';
//borderBottomColor
function test(str){
    var arr=str.split('-');
    for(var i=1;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
    }
    return arr.join('');
}
console.log(test(str));
//第二种方法(正则）
function test2(str){
    return str.replace(/-(\w)/g,function(){
        return(RegExp.$1.toUpperCase());
    })
}
console.log(test2(str));
//查找字符串转成驼峰的方法
//sdjksfssscfssdd->字符串最多的是s,出现了7次
var str2='sdjksfssscfssdd';
function test3(str){
    var obj={};
    var num=0;
    var value='';
    for(var i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]]=[];
        }
        obj[str[i]].push(str[i]);
    }
    for(var attr in obj){
        if(num<obj[attr].length){
            num=obj[attr].length;
            value=obj[attr][0];
        }
    }
    return '最多的字符是:'+value+',出现了：'+num;
}
console.log(test3(str2));
//第二种方法
function test4(str){
    var arr=str.split('');
    arr.sort();
    str=arr.join('');
    var num=0;
    var value='';
    str.replace(/(\w)\1+/g,function($0,$1){
        if(num<$0.length){
            num=$0.length;
            value=$1;
        }
    })
    return '最多的字符是:'+value+',出现了：'+num;
}
console.log(test4(str2));
//如何给字符串加千分符？
//343535353364=>343,535,353,365
var str5='3334343535353364';
//第一种方法
function test5(str){
    var iNum=str.length%3;
    var pre='';
    var arr=[];
    var iNow=0;
    var tmp='';
    if(iNum!=0){
        pre=str.substring(0,iNum);
        arr.push(pre);
    }
    str=str.substring(iNum);
    for(var i=0;i<str.length;i++){
        iNow++;
        tmp+=str[i];
        if(iNow===3&&tmp){
            arr.push(tmp);
            tmp='';
            iNow=0;
        }
    }
    return arr.join(',');
}
console.log(test5(str5));
//第二种方法
//(?=):前向声明
//(?!):反前向声明
function test6(str){
    return str.replace(/(?=(?!\b)(\d{3})+$)/g,',');
}
console.log(test6(str5));