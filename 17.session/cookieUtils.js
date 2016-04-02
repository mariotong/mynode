/**
 * Created by Administrator on 2016/4/1.
 */
exports.serialize=function(name,value,options){
    options=options||{};
    var pairs=[name+'='+value];
    if(options.maxAge){
        var maxAge=options.maxAge-0;
        pairs.push('Max-Age='+maxAge);
    }
    if(options.domain) pairs.push('Domain='+options.domain);
    if(options.path) pairs.push('Path='+options.path);
    if(options.expires) pairs.push('Expires='+options.expires.toGMTString());
    if(options.httpOnly) pairs.push('HttpOnly');
    if(options.secure) pairs.push('Secure');
    return pairs.join(';')
}
var str=exports.serialize('name','zhenglei',{
    maxAge:60,
    domain:'localhost',
    path:'/',
    expires:new Date(),
    httpOnly:true,
    secure:true
});
console.log(str);
//把客户端提交上来的cookie转成对象
exports.parse=function(str){
    var obj=new Object();
    if(str){
        var paris=str.split(/;/);
        paris.forEach(function(pari){
            var values=pari.split('=');
            obj[values[0]]=values[1];
        });
    }
    return obj;
}
console.log(exports.parse(str));