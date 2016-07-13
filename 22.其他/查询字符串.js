var util={
	toQueryString:function(data){
		var arr=[];
		for(var attr in data){
			if(data.hasOwnProperty(attr)){
				arr.push(attr+"="+data[attr])
			}
		}
		return arr.join("&");
	},
	toQueryString1:function(data){
		Object.keys(data).map(function(attr){
			return attr+"="+data[attr];
		})
	}
}
var obj={
	name:'zhenglei',
	age:6
}
var result=util.toQueryString(obj);
console.log(result);
var result1=util.toQueryString1(obj);

