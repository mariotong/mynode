var fs = require('fs');
var thunkify = require('thunkify');//将node的原本回调类型的函数转化成thunk的函数
var readFile = thunkify(fs.readFile);//返回时一个函数，带有回调函数

var gen = function* (){
  var r1 = yield readFile('./1.txt');
  console.log(r1.toString());
  var r2 = yield readFile('./2.txt');
  console.log(r2.toString());
};
/*
上面代码中，yield 命令用于将程序的执行权移出 Generator 函数，
那么就需要一种方法，将执行权再交还给 Generator 函数。
这种方法就是 Thunk 函数，因为它可以在回调函数里，
将执行权交还给 Generator 函数。为了便于理解，
我们先看如何手动执行上面这个 Generator 函数
*/

var g =gen()
var r1 = g.next()//就是一个对象，里面的value值是readFile('./1.txt')的返回值，
//返回的是一个函数,带有回调函数
//这个readFile('/1.txt')的返回值是这个
// return function (callback){
//    return fs.readFile(fileName, callback);
// };
r1.value(function(err,data){
  //所以这个回调可以拿到data的值
  if(err) throw err;
  var r2= g.next(data); //再调一下g.next(data) 就可以把data值交给上一个变量r1,并且调下一yield
  r2.value(function(err,data){
    if(err) throw err;
    g.next(data)
  })
})

/*
上面代码的 run 函数，就是一个 Generator 函数的自动执行器。内部的 next 函数就是 Thunk 的回调函数。
 next 函数先将指针移到 Generator 函数的下一步（gen.next 方法），然后判断 Generator 函数是
 否结束（result.done 属性），如果没结束，就将 next 函数再传入 Thunk 函数（result.value 属性），
 否则就直接退出。有了这个执行器，执行 Generator 函数方便多了。不管有多少个异步操作，
 直接传入 run 函数即可。当然，前提是每一个异步操作，都要是 Thunk 函数，也就是说，
 跟在 yield 命令后面的必须是 Thunk 函数。
*/
//thunk 真正的威力是自动流程管理
function run (fn){
  //这个fn必须是生成器函数
  var gen= fn()
  function next (err,data){
    var result = gen.next(data);
    if(result.done) return //如果结束就返回
    //还没有结束的话就继续
    result.value(next)
  }
  next()
}
var gen = function* (){
  var f1 = yield readFile('./1.txt');
  var f2 = yield readFile('./2.txt');
  console.log(f1.toString())
  console.log(f2.toString())
};
run(gen);
