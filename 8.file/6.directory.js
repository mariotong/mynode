/**
 * Created by Administrator on 2016/3/11.
 */
//directory 创建目录 读取目录 删除目录
//1.创建目录
var fs=require('fs');
/*fs.mkdir('./a/b',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('创建成功');
    }
})*/
//2.读取目录
fs.readdir('a',function(err,files){
    if(err){
        console.error(err);
    }else{
        console.log(files);
    }
})
//查看文件或目录的信息
fs.stat('a',function(err,stat){
    console.log(stat.isFile());
    console.log(stat.isDirectory());
    console.log(stat.size);
    /* stat
     size
     atime: 最后访问的时间：Fri Mar 11 2016 19:44:13 GMT+0800 (中国标准时间),
     mtime: 最后修改的时间：Fri Mar 11 2016 19:44:13 GMT+0800 (中国标准时间),
     ctime: 创建时间：Fri Mar 11 2016 19:44:13 GMT+0800 (中国标准时间),
     birthtime: 出生时间：Fri Mar 11 2016 19:35:42 GMT+0800 (中国标准时间)
    * */
})
//判断一个文件或目录是否存在
fs.exists('a',function(exists){
    console.log(exists);
});
//从相对路径得到绝对路径
fs.realpath('a/b',function(err,path){
     console.log(path)
});
//在第六个模块path中也有这个功能,即path模块
var path=require('path');
console.log('path',path.resolve('a'))

//修改目录的信息
fs.utimes('./zhenglei.txt',new Date(),new Date(),function(){

})
//修改权限
fs.chmod('./zhenglei.txt',0600,function(){
    //mode 只能读
})
//修改名字
fs.rename('zhenglei.txt','zhenglei2.txt',function(){
    //
})
//截断
var currPath='zhenglei2.txt';
fs.stat(currPath,function(err,stat){
    console.log('before',stat.size);
    fs.truncate(currPath,13,function(){
        fs.stat(currPath,function(err,stat){
            console.log('after',stat.size);
        })
    })
});
//删除一个目录
// fs.rmdir('a');//不能删除不为空的文件夹
//fs.rmdir('a/b');
//级连创建目录
var p=require('path');
function makeP(str){
    var arr=str.split('\\');
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        var currPath= p.resolve(arr.slice(0,i+1).join('\\'));
        var exists= fs.existsSync(currPath);
        if(exists){
            var stat=fs.statSync(currPath);
            if(stat.isFile()){
                throw Error('is File');
            }
        }else{
            fs.mkdirSync(currPath);
        }
        console.log(currPath);
    }
}
makeP('a\\b\\c\\d');
//级连删除目录
function removeP(str){
    var arr=str.split('\\');
    console.log(arr);
    for(var i=arr.length;i>0;i--){
        var currPath= p.resolve(arr.slice(0,i+1).join('\\'));
        console.log('after',currPath);
        var exists= fs.existsSync(currPath);
        if(exists)
            fs.rmdirSync(currPath);
        }
}
removeP('a\\b\\c\\d');