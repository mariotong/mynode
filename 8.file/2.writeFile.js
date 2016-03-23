/**
 * Created by Administrator on 2016/3/11.
 */
var fs=require('fs')
/*
 * 可以完整的写入一个文件
 * fs.writeFile
 * */
//data 可以是字符串也可以是buffer
fs.writeFile('./write.txt',new Buffer('我是郑磊'),{flag:'w',encoding:'utf8'},function(err,data){
    if(err){
        console.error(err)
    }
})
//flag:a 以追加模式打开文件，如果文件不存在则创建。
fs.writeFile('./write.txt',new Buffer('郑磊好帅'),{flag:'a',encoding:'utf8'},function(err,data){
    if(err){
        console.error(err)
    }
})
//fs.appendFile(filename, data[, options], callback)异步追加文件内容。
fs.appendFile('./write.txt','英俊的少年');
//源码分析
/*  先判断options.flag 是否存在
 如果加一个{flag:'w'}就会覆盖
 if (!options.flag)
 options = util._extend({ flag: 'a' }, options);
 fs.writeFile(path, data, options, callback);*/

/*
 * base 64
 * */
fs.readFile('./baidu.png','base64',function(err,data){
    console.log(data);
})



