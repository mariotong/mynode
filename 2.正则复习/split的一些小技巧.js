var str1="我是郑磊来自与北化"
var str2="2014-3-20 15:07:36";
var a=str1.split("");
var a2=str2.split(/[ \-:]/);
//也可以是 var a2=str2.split(/[ :-]/);
//console.log(a2);
var str3='779775648899872'//将字符串中重复的数字和此数字重复的次数记下来
var a3=str3.split("");
a3.sort();
var str4=a3.join("");
console.log(str4);//245677777888999
var strCount='';
str4.replace(/(\d)\1+/g,function(s1,s2){
  strCount+=s2+'出现的次数是'+s1.length+'次'+'\n';
});
console.log(strCount);