/**
 * Created by Administrator on 2016/4/21.
 */
/*
* 限制条件补全代码：
* 题目一：ab两个变量 不用第三个变量来切换两个变量值
* */
//第一题
//如果是a,b变量数字
var a=5;
var b=6;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);//6
//如果是字符串的话
var c='hello';
var d='hi';
c=[d,c];
d=c[1];
c=c[0];
console.log(c,d);
/** 题目二：有一个数n=5,不用for循环，怎么返回【1,2,3,4,5】这样一个数组*/
//第一种方法
function show(n){
    var arr=[];
    return(function(){
        arr.push(n);
        n++;
        if(n!=6){
            arguments.callee()
        }
        return arr;
    })()
}
console.log(show(1));
//类似第一种的方法
function show1(n){
    var arr=[];
    return(function(){
        arr.unshift(n);
        n--;
        if(n!=0){
            arguments.callee()
        }
        return arr;
    })()
}
console.log(show1(5));
//第三种的方法用正则的replace
var n=5;
function show2(n){
    var arr=[];
    arr.length=n+1;
    var str=arr.join('a');
    //[,,,,]->'aaaa'
    /*var str2=str.replace(/a/ig,function(){
        return (arguments[1]+1);
    });
    var arr2=str2.split('');
    return arr2;*/
    var arr2=[];
    str.replace(/a/ig,function(){
        arr2.unshift(n--)
    })
    return arr2;
}
console.log(show2(5))

/** 题目三：一个数n,当n小于1oo就返回n,否则就返回100,*/

//注意不让用if和else
function show4(n){
    //第一种方法
   /* switch(n<100){
        case true:
            return n;
        break;
        case false:
            return 100;
        break;
    }*/
    //第二种方法
   //return  Math.min(100,n);
    //第三种方法
   /* var arr=[n,100];
    arr.sort(function(n1,n2){
        return n1-n2;
    })
    return arr[0];*/
    //第四种方法
    /*var m=''+n;
    for(var i=2;i<m.length;i++){
        return 100;
    }
    return n;*/
    //第五种方法
   /* var json={name:'hello'};
    var m=n<100||json;
    for(var attr in m){
        return 100;
    }
    return n;*/
    //第六种方法
    var m=n>=100&&100;
    //n 140 m 100
    //n 40 m false
    return m=m||n;
}
console.log(show4(20));