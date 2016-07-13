//参考阮一峰老师的例子
//先看一下这个例子
function* g(x){
  var y = yield x + 2;
  console.log(y);
}
var g = Gen(1);
console.log(g.next())
console.log(g.next())
//打印结果是这样的
//{ value: 3, done: false }
//{ value: undefined, done: true }
console.log('--------------------------------------')
function* G(x){
  var y = yield x + 2;
  console.log(y);
}
var g = Gen(1);
console.log(g.next())
console.log(g.next(2)) //next 方法带有参数2，
//这个参数可以传入 Generator 函数，作为上个阶段异步任务的返回结果，被函数体内的变量 y 接收。

//打印结果是这样的
//{ value: 3, done: false }
//2
//{ value: undefined, done: true }

console.log('----------------------------------------')
function* Gen(x){
  var y = yield x + 2;
  return y;
}

var g = Gen(1);
console.log(g.next()) // { value: 3, done: false }
console.log(g.next(2)) // { value: 2, done: true }

console.log('------------------------------------------')
function* gen(a){
  var c = yield a+1
  console.log(c) //c=2
  var b = yield c //
  console.log(b)
}
var g = gen(2);
console.log(g.next());//返回的是{ value: 3 , done: false }
console.log(g.next(2));//返回的是{value:2 , done:false}
//console.log(g.next());//如果没有赋值，b就undefined了
console.log(g.next(3))//b 等于3了

console.log('=======================================')
