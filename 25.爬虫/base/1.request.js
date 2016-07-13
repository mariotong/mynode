var request=require('request');
var fs=require('fs');
/*request('http://www.baidu.com',function(err,res,body){
   if(err){
   	throw err;
   }
   console.log(res.headers);
});*/
//request("http://files.jb51.net/image/sdzx_300.gif").pipe(fs.createWriteStream('test.png'))
var superagent=require('superagent');
var cheerio= require('cheerio');//node里的jquery
superagent.get('http://www.baidu.com').end(function(err,res){
 	if(err) throw err;
 	//res.text 响应体
    var $ =cheerio.load(res.text);
    console.log($('#lg').html());
});