/**
 * Created by Administrator on 2016/4/13.
 */
var reg=/^i come from china|america|france|german|canada$/;
var str="i com from france";
console.log(reg.test(str));
console.log(reg.exec(str));
var reg3=/[0-z]/;
var reg4=/[\u0030-\u007a]/   //基本128个
//reg3和reg4是一样的
//匹配中文的
var chineseReg=/^[\u4e00-\u9fa5]+$/; //为什么可以用连字符-，因为在ASCII码表示连续的
var str2='我是郑磊';
console.log(chineseReg.test(str2));
var reg5=/^\d+$/;
var reg6=/^[^0-9]+$/ //匹配非0-9的
var reg7=/^\D+$/;//reg6=reg7
