class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  constructor(name, color) {
     super(name); // 这个super指向什么呢
     this.color = color;
  }

  speak() {
    super.speak(); // 这个super又指向什么？
    console.log(this.name + ' roars.');
  }
}

let a = {
   toString(){
      return 'My little pony' + super.toString(); //这里的super又指向什么
   }
}
let lion =new Lion('zhenglei','green');
lion.speak();