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

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Person = function () {
    //构造函数

    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this.hobbies = [];
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
    }, {
        key: 'hobby',
        get: function get() {
            return this.hobbies;
        },
        set: function set(hobby) {
            this.hobbies.push(hobby);
        }
    }]);

    return Person;
}();

var p = new Person('zhenglei');
p.hobby = 'smoking';
p.hobby = 'drinking';
console.log(p.hobby);
console.log(p);
p.getName();
