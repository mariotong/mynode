/**
 * Created by Administrator on 2016/3/10.
 */
var person={
    name:'zfpx',
    say:function(words){
        console.log(this.name+' say '+words)
    }
}
person.say('hello');
var p={
    name:'node.js'
}
var zhenglei={
    name:'zhenglei'
}
person.say.call(p,'hello');
person.say.apply(zhenglei,['hello']);
//bind
var pSay=person.say.bind(p,'zhenglei');