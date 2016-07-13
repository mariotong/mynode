/**
 * Created by Administrator on 2016/4/19.
 */
/*
function Person(){
   this.age=20;
    return {name:'zhenglei'};//重写这个返回对象，它会自动先定义一个对象，然后把这个对象返回去
}
var p =new Person();
console.log(p)*/
"use strict";
class Person{
    //构造函数
    constructor(name){
        this.name=name;
        this.hobbies=[];
    }
    getName(){
        console.log(this.name);
    }
    get hobby(){
        return this.hobbies;
    }
    set hobby(hobby){
        this.hobbies.push(hobby);
    }
}
var p=new Person('zhenglei');
p.hobby='smoking';
p.hobby='drinking';
console.log(p.hobby);
console.log(p);
p.getName();