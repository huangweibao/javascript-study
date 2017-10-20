// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

//类的定义
class Animal {
  //es6中新型构造器
  constructor(name){
    this.name = name
  }

  //实例方法
  sayName() {
    console.log('my name is: ' + this.name);
  }
}

//类的继承
class Programmer extends Animal {
  constructor(name) {
    //直接调用父类构造器进行初始化
    super(name);
  }

  program() {
    console.log("I'm coding ...");
  }

}

//测试我们的类
let animal = new Animal('dummy');
let wayou = new Programmer('wayou');
animal.sayName(); //输出 my name is: dummy
wayou.sayName(); //输出 my name is: wayou
wayou.program(); //输出 I'm coding
