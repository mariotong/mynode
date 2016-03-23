/**
 * Created by Administrator on 2016/3/10.
 */
/*
*同步异步
*
 */
/*
var bun,cucumber;
function getBun(){
   setTimeout(function(){
       bun='bun';
   },2000);
}
function getCucumber(){
    setTimeout(function(){
        cucumber='cucumber';
    },1000);
}
function eat(){
    console.log(bun,cucumber);
}
getBun();
getCucumber();
eat();//undefined undefined*/
//nextTick(callback)一旦当前事件循环结束，调用回到函数。
function say(){
    console.log('hello');
}
//setTimeout(say,0);
setImmediate(function(){
    console.log('immediate');
})//优先级比nextTick低
proces.nextTick(say);//比上面那个来的快
console.log('next');//先输出'next'
