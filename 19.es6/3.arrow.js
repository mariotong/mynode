/**
 * Created by Administrator on 2016/4/19.
 */
    //babel es6往es5的转换器
//let say=name=>name;
    "use strict";
let say=(name,age)=>{
    var a=5
    return `my name is ${name},the ${a} age is ${age}`;
};
var res=say('zhenglei',6);
console.log(res);