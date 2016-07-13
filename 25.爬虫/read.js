var request=require('request');
var cheerio=require('cheerio');
var util=require('util');
var debug =require('debug')('craw:read');
//读取文章的分类
exports.classList=function(url,callback){
	request(url,function(err,res){
		if(err) return callback(err);
		//解析响应体
		var $ = cheerio.load(res.body.toString());
		var classList=[];
		$('.panel_body li a').each(function(){
			var $this=$(this);//a 标签
			var item={
				name:$this.text().trim(),
				url:$this.attr('href')
			};
			var s=item.url.match(/\/article\/category\/(\d+)/)
			if(Array.isArray(s)){
				item.id=s[1];
				classList.push(item);
			}
		});
		callback(null,classList);
	});
}

exports.classArticles=function(url,callback){

}
exports.classList('http://blog.csdn.net/hongqishi',function(err,classList){
	if(err) throw err;
	classList.forEach(function(cls){
		console.log(cls);
	})
})