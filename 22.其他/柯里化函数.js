/**
 * Created by Administrator on 2016/5/2.
 */
console.log(Object.prototype.toString.call(1));
function isType(type,value){
    "use strict";
    return Object.prototype.toString.call(value)==="[object "+type+"]";
}
console.log(isType("Number",13));
