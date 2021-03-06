//解构 destrusturing
//es5访问数组中的数据
var firstName = someArray[0];
var lastName = someArray[1];
//es6 解构访问数组中的数据
let [firstName, lastName] = someArray;

//利用解构导入部分commonJs模块
const { SourceMapConsumer, SourceNode } = require('source-map');
//1.ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

//2、ES6允许写成：let [a,b,c] = [1,2,3];上面代码表示，可以从数组中提取值，
//按照对应位置，对变量赋值。本质上，这种写法属于“模式匹配”，只要等号两边的模式
//相同，左边的变量就会被赋予对应的值.

//3.如果解构不成功，变量的值就等于undefined.  let [bar, foo] = [1];

//4、只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

//5、解构赋值允许指定默认值。
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
//如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

//6、解构不仅可以用于数组，还可以用于对象。对象的解构与数组有一个重要的不同。
//数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，
//变量必须与属性同名，才能取到正确的值。

//7、如果变量名与属性名不一致，必须写成下面这样
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'

//这实际上说明，对象的解构赋值是下面形式的简写
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

//8、对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量上面
let { log, sin, cos } = Math;

//9、字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
len // 5

//10、解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

//11、以下三种解构赋值不得使用圆括号。
//a.变量声明语句中，不能带有圆括号。
//b.函数参数中，模式不能带有圆括号。
//c.赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。


//13、变量解构赋值的用途：

//交换变量的值。[x,y]=[y,x];
//从函数返回多个值。函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
//函数参数的定义。解构赋值可以方便地将一组参数与变量名对应起来。
//提取JSON数据
//函数参数的默认值
//遍历Map结构
//输入模块的指定方法