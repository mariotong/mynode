/**
 * Created by Administrator on 2016/3/12.
 */
var fs=require('fs');
var out=fs.createWriteStream('./test1.txt');
for(var i=0;i<10000;i++){
    var flag=out.write(i.toString());//是否成功写入
    console.log(flag);
}
out.on('drain',function(){
   console.log('缓存区中的数据全部输出');
});
out.on('error',function(){
    console.log(err);
});
var read=fs.createReadStream('./test1.txt');
var out=fs.createWriteStream('./test2.txt');
/*
read.on('data',function(data){
   var flag=out.write(data);
    if(!flag){
        read.pause();
    }
});
read.on('end',function(){
    out.end();
});
out.on('drain',function(){
    read.resume();
})*/
read.pipe(out);
