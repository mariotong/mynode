/**
 * Created by Administrator on 2016/3/25.
 */
exports.CachedType={
    fileMath:/^\.(gif|png|jpg|js|css)$/ig,
    maxAge:30,//缓存时间默认是30秒
}
//设置可以对那些类型的文件进行压缩；
exports.Compress={
    match:/\.(css|js|html)/ig,
}