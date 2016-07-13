//co 函数库是著名程序员 TJ Holowaychuk
//于2013年6月发布的一个小工具，用于 Generator 函数的自动执行。
var fs = require('fs');
var thunkify = require('thunkify');//将node的原本回调类型的函数转化成thunk的函数
var readFile = thunkify(fs.readFile);//返回时一个函数，带有回调函数
var co =  require('co');

var gen = function* (){
  var f1 = yield readFile('./1.txt');
  var f2 = yield readFile('./2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};
var co = require('co');
//co 函数库可以让你不用编写 Generator 函数的执行器。
// co(gen);
// co(gen).then(function (){
//   console.log('Generator 函数执行完成');
// })
//上面代码中，Generator 函数只要传入 co 函数，就会自动执行。
//co 函数返回一个 Promise 对象，因此可以用 then 方法添加回调函数。
