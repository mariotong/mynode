/**
 * Created by Administrator on 2016/3/9.
 */
/*
*  控制台是一个界面
* log 标准输出
* 控制台对象
 */
console.log('this is a log');

console.log('%s',345)//string
console.log('%j',{ name:'zhenglei' });//json
console.log('%d','666')//number
console.log('%d','fdf')//NaN
console.log(1+2);//四则运算
console.log(5===3);//计算布尔值
console.info('info');
console.warn('warn');
console.error('error');
var person={
    name:"zfpx",
    age:6
}
console.log(JSON.stringify(person));//json
console.dir(person)//查看对象内容并输出
console.trace()
