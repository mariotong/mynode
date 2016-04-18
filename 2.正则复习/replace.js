/**
 * Created by Administrator on 2016/4/13.
 */
//replace,exec,match
//原理：先按照正则规定的规则，到我们的字符串把正则匹配的内容捕获到
    //一次捕获到之后，都把捕获的内容替换成新的内容
    //1)我们的正则表达式捕获到几次，对应后面的function就要执行几次
    //2)每一次执行function,会自动给我们捕获内容的形参
    //执行一次exec捕获的内容一致
    //arguments[0]-->exec捕获的第一项-->大正则捕获的内容
    //[1]--->exec 的index--->开始捕获的索引
    //[2]-->exec 的input --> 捕获的原始字符串
    //不仅如此，我们小分组捕获的内容，在这里同样可以获得
    //3)我们在function中，通过return来返回我们要替换的内容
    //-->return 大正则捕获的内容进行替换
    //不写return,默认是用undefined来进行替换的
    //如果不想实现替换的话，捕获的内容是啥，我们就返回啥
var str1='abcda98apa9a';
var result=str1.replace(/a/g,'*');
console.log(result);
var i=0;
result=str1.replace(/a/g,function(s){
    ++i;
    return i;
})//自定义替换规则
console.log(result);

var str='8872584';
var a=['一','二','三','四','五','六','七','八','九'];
var result2=str.replace(/(\d)/g,function(s){
    console.log(Array.prototype.slice.apply(arguments));
    //第一个参数：当前这些正则匹配到的结果
    //i当前str的位置
    //input:当前输入的字符串str
    //前提正则里是没有分组的
    //如果有分组，自动在arguments的第二个位置加分组的结果
    return a[s];
})
console.log(result2);
//一个实例
//模板引擎实现的初步原理
var str3='my name is {0},I am {1} years old. I am in class {2} college {3}'
var a=['郑磊',20,4,3];
var reg5=/{(\d+)}/g; //匹配的是一个{0}
var result6=str3.replace(reg5,function(str,i){
    /*console.log(Array.prototype.slice.apply(arguments));
    arguments=Array.prototype.slice.apply(arguments);
    return a[arguments[1]];*/
    //return a[i];
    return a[RegExp.$1];
})
console.log(result6);