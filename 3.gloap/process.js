/**
 * Created by Administrator on 2016/3/10.
 */
/*
*  应用程序是进行类的对象实例
*  在node.js里，process对象代表node.js应用程序
*  可以获取应用程序的用户，运行环境等各种信息
 */
//console.log(process);
/*
*
*
 */
process.stdout.write('hello');
//btn.addEventLister('click',function(){});
process.stdin.on('data',function(data){
    process.stdout.write(''+data);
})

//argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node
//，第二个成员是脚本文件名，其余成员是脚本文件的参数。

process.argv.forEach(function(item){
    console.log(item);
})
//node process.js zhenglei 6
// C:\Users\Administrator\Desktop\mynode\3.gloap\process.js
//zhenglei
//6


//exit当进程准备退出时触发。
//当程序退出时清理
process.on('exit',function(){
   console.log('clear')
})
//想的到捕获异常
try{
    noDefine();
}catch(err){
    console.log(err);
}

//uncaughtException
//当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，
//默认的操作（打印堆栈跟踪信息并退出）就不会发生。
process.on('uncaughtException',function(err){
    console.log(err);
})
zhenglei();
console.log('正常代码');//打印堆栈跟踪信息并退出