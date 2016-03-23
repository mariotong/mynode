/**
 * Created by Administrator on 2016/3/10
 */
/*
js不足
js没有模块系统，不支持封闭的作用域和依赖管理
没有标准库，没有文件系统和IO流API
也没有包管理系统
commjs规范 优点 封装功能，封装作用域，可以解决依赖问题，工作效率更高，重构方便
在node.js里，模块划分所有的功能，每个Js都是一个模块
实现require方法
npm 实现了模块的自动加载和安装依赖
*/

//定义模块
var exports={};
(function(exports,require,module,__filename,__dirname){
   //在这里面写代码，匿名函数自执行
   // exports=module.exports;
 //   exports.name='zhenglei'//没有用的
    //return module.exports;//返回的是module.exports
})()
/*
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
换言之，一个 Node.js 文件就是一个模块，
这个文件可能是JavaScript
代码、JSON 或者编译过的C/C++ 扩展。
*/
//模块的加载策略
//分类
//原生模块 http path fs util events，在lib的目录下面
//编译成二进制，加载速度最快
//文件模块
//在硬盘的某个位置，非常慢
console.log(require)
//require（）不带相对路径的，直接通过下面的路径去找，一层一层往上找
/*
paths:
    [ 'c:\\Users\\Administrator\\Desktop\\mynode\\module\\node_modules',
        'c:\\Users\\Administrator\\Desktop\\mynode\\node_modules',
        'c:\\Users\\Administrator\\Desktop\\node_modules',
        'c:\\Users\\Administrator\\node_modules',
        'c:\\Users\\node_modules',
        'c:\\node_modules' ] },*/
