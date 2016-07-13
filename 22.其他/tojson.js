var util={
	toJSON:(function(){
		/*if(JSON){
			return function(str){
				JSON.parse(str)
			}			
		}else{*/
			return function(str){
				//return eval("("+str+")")
				return new Function('return'+str)
			}
		//}
	})()
}
var str='{"name":"zhenglei"}';
var result=util.toJSON(str);
console.log(str);
//构建函数的一种方法
/*var fn=new Function('a','b','console.log(a,b);');
fn(1,3);*/
var math=3.3;
console.log(~~math);//两次取反，即是整数