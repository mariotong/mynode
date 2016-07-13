/**
 * Created by Administrator on 2016/5/3.
 */
var arr=[1,2,3];
arr.forEach(function(item,i,all){
    "use strict";
    console.log(this.name,item,i,all);
},{ name:"zhenglei" });
