
/*为什么 co 可以自动执行 Generator 函数？
前面文章说过，Generator 函数就是一个异步操作的容器。
它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。
两种方法可以做到这一点。*/
/*（1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。
（2）Promise 对象。将异步操作包装成 Promise 对象，用 then 方法交回执行权。*/
//使用 co 的前提条件是，Generator 函数的 yield 命令后面，
//只能是 Thunk 函数或 Promise 对象。

var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('./1.txt');
  var f2 = yield readFile('./2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};

var g = gen();

g.next().value.then(function(data){
  g.next(data).value.then(function(data){
    //data已经交给了f1,并调下一个yield
    g.next(data);
    //data交给f2
  });
})

function run(gen){
  var g = gen();

  function next(data){
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

run(gen);
