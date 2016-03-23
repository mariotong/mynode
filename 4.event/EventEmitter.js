/**
 * Created by Administrator on 2016/3/10.
 */
var EventEmitter = require('events').EventEmitter;
/**
 * addListener 绑定
 * on 绑定
 * once 触发一次就解绑
 * removeListener 移除监听
 * removeAllListeners 移除所有的监听
 * listeners 得到此对象上特定的事件上绑定的回调函数
 */
var util = require('util');
function Teacher(name){
    this.name = name;
}
util.inherits(Teacher,EventEmitter);

var zry = new Teacher();
// 绑定事件及事件的处理程序
zry.on('hungry',function(){
    console.log('吃饭');
    return "饿了回家吃去吧";
});
var soup = function(){
    console.log('喝汤');
};
zry.addListener('hungry',soup);

zry.once('love',function(){
    console.log('结婚');
});
zry.removeListener('hungry',soup);
//zry.removeAllListeners('hungry');
// 触发事件
zry.emit('hungry');
zry.emit('love');
zry.emit('love');//不触发

console.log(zry.listeners('hungry')[0]());

