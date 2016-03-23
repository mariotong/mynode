/**
 * Created by Administrator on 2016/3/12.
 */
var fs=require('fs');
var rs=fs.createReadStream('zhenglei');
rs.on('readable',function(){
    console.log('----------readable------------')
    var data;
    while(null!=(data=rs.read())){

    }//128k大小触发三次
});//暂停模式
rs.on('end',function(){
    console.log('end');
});