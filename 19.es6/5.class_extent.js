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
class Student extends Person{
    getStuNo(){
        console.log('945');
    }
}
var student=new Student('zhangsan');
student.getName();
student.getStuNo();