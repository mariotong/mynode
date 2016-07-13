//延迟操作
var Defer=function(){
	var onSuccess,onFail;
	return { 
        resolve:function(val){
            onSuccess(val);
        },
        reject:function(err){
        	onFail(err);
        },
		promise: {
           then:function(success,fail){
               onSuccess=success;
               onFail=fail;
           }
		}
	}
}
var defer = new Defer();
setTimeout(function(){
	// defer.resolve("hello");
      defer.reject('too busy')
},3000)
defer.promise.then(function(data){
	console.log(data);
},function(err){
	console.log(err);
})
