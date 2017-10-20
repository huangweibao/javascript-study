// iterator:它是这么一个对象，拥有一个next方法，这个方法返回一个对象{done,value}，这个对象包含两个属性，一个布尔类型的done和包含任意值的value
// iterable: 这是这么一个对象，拥有一个obj[@@iterator]方法，这个方法返回一个iterator
// generator: 它是一种特殊的iterator。反的next方法可以接收一个参数并且返回值取决与它的构造函数（generator function）。generator同时拥有一个throw方法
// generator 函数: 即generator的构造函数。此函数内可以使用yield关键字。在yield出现的地方可以通过generator的next或throw方法向外界传递值。generator 函数是通过function*来声明的
// yield 关键字：它可以暂停函数的执行，随后可以再进进入函数继续执行

//Iterators
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  };
}
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true



//Generators
function* idMaker() {
  var index = 0;
  while(true) yield index++;  //yield相当于调试断点
}
var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

