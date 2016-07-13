var util={
	bind:(function(){
		if(Function.prototype.bind){
			return function(fn,context){
				var args=Array.prototype.slice.call(arguments,2);
				return fn.bind(context,args.concat(Array.prototype.slice.call(arguments)));
			}
		}else{
			return function(fn,context){
				var args=Array.prototype.slice.call(arguments,2);
				return function(){
				   fn.apply(context,args.concat(Array.prototype.slice.call(arguments)))	
				}	
			}
		}
	})()
}

var say=function(name,word){
	console.log(this.name,name,word);
}
var newSay=util.bind(say,{name:'zhenglei'},'myzhenglei');
newSay('hamesome');
