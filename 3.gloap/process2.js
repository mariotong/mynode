/**
 * Created by Administrator on 2016/3/10.
 */
/*memoryUsage()
 *返回一个对象，描述了 Node 进程所用的内存状况，单位为字节。
 * rss 进程常驻内存 resident set size
 * heapTotal 客户端越多。申请到的堆内存
 * heapUsed  使用的堆内存，申请到的堆内存会多一点
 * */
console.log(process.memoryUsage());
//cwd current working direcoty 当前工作目录
//cwd()返回当前进程的工作目录
console.log(process.cwd());
console.log(__dirname);
//chdir(directory) 改变当前工作进程的目录，如果操作失败抛出异常。
process.chdir('..');
console.log(process.cwd());//c:\Users\Administrator\Desktop\mynode
console.log(__dirname);//c:\Users\Administrator\Desktop\mynode\3.gloap
