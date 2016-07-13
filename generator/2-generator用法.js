var fetch = require('node-fetch');

//写一个生成器函数
function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.url);//https://api.github.com/users/github
}
//为什么我们可以用 yield 拿到 result的值，而不用回调函数

var g = gen(); // 首先执行 Generator 函数，获取遍历器对象
var result = g.next(); //然后使用 next 方法
//得到了什么值？
console.log(result)//{ value: Promise { <pending> }, done: false }
//result.value 返回的是一个promise对象，所以我们可以用then方法
result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data); //然后再调以此next我们的result就可拿到data的数据了
});
