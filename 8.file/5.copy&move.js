/**
 *@param src 源地址
 * @paranm dest 目标地址
 */
var  fs=require('fs');
var  BUFF_SIZE=1024*8;
/*function copy(src,dest){
    var buff=new Buffer(BUFF_SIZE);
    var srcFd=fs.openSync(src,'r');
    var destFd=fs.openSync(dest,'w');
    var readSoFar=0;
    do{
        var readedBytes=fs.readSync(srcFd,buff,0,BUFF_SIZE,readSoFar);
        fs.writeSync(destFd,buff,0,readedBytes,null);
        readSoFar+=readedBytes;
    }while(readedBytes==BUFF_SIZE);
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
}
//复制
copy('write.txt','zhenglei.txt');*/
//剪切 cut
function cut(src,dest){
    var buff=new Buffer(BUFF_SIZE);
    var srcFd=fs.openSync(src,'r');
    var destFd=fs.openSync(dest,'w');
    var readSoFar=0;
    do{
        var readedBytes=fs.readSync(srcFd,buff,0,BUFF_SIZE,readSoFar);
        fs.writeSync(destFd,buff,0,readedBytes,null);
        readSoFar+=readedBytes;
    }while(readedBytes==BUFF_SIZE);
    fs.closeSync(srcFd);
    fs.closeSync(destFd);
    fs.unlinkSync(src);
}
cut('write.txt','zhenglei.txt');