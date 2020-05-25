全局安装typescript `npm i -g typescript`

* ts的文件后缀是以.ts来结尾的
* 浏览器无法解析ts文件的代码，需要编译成js文件的代码，执行命令：tsc index01.ts --转换成-->index01.js（手动编译）

vscode配置自动编译ts文(进入到根目录下)件：

* tsc --init,生成tsconfig.json配置文件
* 在tsconfig。json文件中找到outDir（输出至哪个文件夹，默认为根目录下，配置ts编译成js后需要存储的位置
* 点击“ 终端 -- 运行任务  --  tsc-监视config.json ”

HBuilder配置自动编译ts文件：

* 点击“工具--插件安装“
* 点击”浏览eclipse插件市场“

* 弹框中找到输入框find，输入 "typescript",找到typescript（有点慢），点击安装
* 安装完成后重启编译器，点击“工具-选项-Typescript-Compiler",勾选上Compiler all TypeScript files on builder，点击确定
* 右键点击项目根目录--配置--点击“enable TypeScript Hbuilder”

TS新增了类型校验，写ts代码的时候必须指定类型

`var flag:number = 1;`

`var flag:number = '1';错误写法`

#### TS的数据类型：(11种)

* boolean  number string array tuple(元祖类型)  enum(枚举)  any(任意类型) null undefined void never

###### 数组类型：ts中定义数组的方式有两种

* 第一种：

  ​     `var arr:number[] = [1,2,3,11] 表示arr这个数组中的元素必须都是数字类型`

* 第二种：

  ​     `var  arr:Array<number> = [1,2,3,11]`

###### 元组类型：属于数组的一种

* 元组类型指可以给数组中的每一个位置的元素指定类型，指定的类型与数组中的元素位置一一对应

  `var arr:[number, string, boolean] = [12,"11",true] // 位置要与指定类型对应起来`

###### 枚举类型：(常用于状态码)

enum 枚举名 {标示符1，标示符2，标示符3}

enum 枚举名 {'标示符1'=1，'标示符2'=2}

console.log(枚举名.标示符x)

如果不给标示符赋值，打印出来的就是标示符所在位置的角标，赋值则打印出标示符对应的值

​	`enum flag {'success' = 1, 'error' = 2}`

​    `var f:flag = flag.error`

###### 字符串类型

​	`var str:string='abcccd';`

###### any任意类型

​	` var obj:any = document.getElementById('box')`

​    `obj.style.color='red'`

```javascript
var num:any;
var num1:number;
var num2:number | undefined;
console.log(num); // 输出undefined
console.log(num1); // 报错
console.log(num2); // 输出undefined
```



 

​	

###### null	undefined类型

```js
var num:number | undefined // num的类型为number类型或者只定义了num这个变量，没有赋值。如果要赋值的话，只能是number类型或者值为undefined
var num:undefined // num只申明了但是没有赋值，如果要赋值，只能赋undefined
var num:null; // 表示num只能是null，不能给它赋值，或者说只能赋null给num

```

###### void 类型

typescript中void表示没有任何类型，一般用于定义方法的时候方法没有返回值

```js
function fn():void {} // 定义一个没有任何返回值的fn方法
// 指定返回数组类型
function fn():Array<any> {
    var obj:any = {name:'张三'};
    let arr:Array<any> = [];
    arr.push(obj);
    return arr;
}
console.log(fn())
```



#### TS函数

###### 函数声明指定类型

```js
function fn():string {return String} // 定义了一个方法，该方法只能返回字符串
function fn():Object {return Object} // 定义了一个方法，该方法只能返回一个对象
var fn=function ():string {return string} // 定义了一个方法，该方法只能返回字符串
function fn(name:string, age:number, sex:string):object {return object}
// 指定传入的参数类型，返回指定类型的数据
function backStr(name:string, age:number):string {
    let str = name + '----' +age;
    return str;
}
console.log(backStr('小明', 20));

TS函数重载(函数同名，参数不同)

```

###### 匿名函数指定类型

```js
// 声明一个返回字符串的函数
let strfn = function ():string {
    var str = 'qwe';
    return str;
}
// 声明一个返回对象的函数
let objFn = function ():Object {
    let obj = {'name':'账单'};
    return obj;
}
// 声明一个返回数组的函数
let arrFn = function ():Array<any> {
    let arr:Array<any> = [1, '2', {name: "张三"}];
    return arr;
}
console.log(strfn());
console.log(objFn());
console.log(arrFn());
```

###### 声明一个没有返回值的函数

```js
function noReturn():void {
  console.log('没有返回值');
}
console.log(noReturn);
```

###### 方法的可选参数

```js
// ES5中方法的形参和实参可以不一样，但是在TS中必须一样，如果不一样，则需要配置可选参数

// ts中，如果在age后面不加?,则表示调用fn1函数的时候，name和age这两个参数都必须要传，如果在参数后面加一个？，则表示这个参数可传可不传，是可以选择的。
···注意：可选参数的位置必须放置在所有参数的最后面，不能放在必传参数的前面···
function fn1(name:string, age?:number):object{ // age为可选参数
  reuturn {}
}
```

###### 函数的默认参数

```js
// es5中是不能给函数指定默认参数的，但是在es6和ts中是可以给函数指定默认参数的
function getInfo(name:string, age:number = 30):void {
    console.log(name+'---'+age)
}
// age不是可选参数，但是age有默认参数，如果不传age的话，则会默认使用age的默认值20
getInfo('zhangsan', 100) // zhangsan---100
getInfo('zhangsan') // zhangsan---30
```

###### 函数的剩余参数

```js
// 剩余参数(有点类似于agreement伪数组传参数)
function fn3(...result:number[]):void {
  var sum=0;
  for (vat i=0;i<result.lenth;i++){
    sum+=result[i]
  }
	console.log(sum)
}
// fn3(1,2,3)
// fn3(1,2,3,4,5)
function fn4(a:number,...res:number[]):Array<any> {
  var sum = a;
  return res;
}
fn4(1, 2, 3, 4, 5);
```

###### 函数重载

```js
// java中，函数重载指的是函数名一样，但是他们的参数不一样，这是会出现函数重载的情况
// ts中的重载，是指通过为同一个函数提供多个函数类型定义来实现多种功能的目的
// ts为了兼容es5/es6，重载的写法和java有区别
/*
es5中，出现同名的函数时，下面的函数会替换掉上面的函数
function css(conf){}
functioncss(conf:number, color:string){} // 会替换掉上面的css函数
*/
// ts中的重载
function info(name:string):string ;
function info(age:number):string ;
function info(str:any):any {
    if (typeof str == 'string') {
        return '姓名'+str;
    } else {
        return '年龄'+str
    }
};

console.log(info('张三'))
console.log(info(20))

// 参数重复时的写法
function info(name:string):string;
function info(name:string,age:number):string;
function info(name:any, age?:any):any {
  if (age) {
    ...
    return ...
  } else {
    ...
    return ...
  }
}
```

###### 箭头函数

```js
function fn() {}    ----------   () => {} this指向上下文
```

#### TS中的类

###### es5中定义类

```js

function Person() {
  this.name='张安';
  this.age=20;
  this.run=function() {
    console.log('在构造函数中定义方法')
  }
}
// 原型链上的属性和方法会被它的所有的实例所共享
Person.prototype.sex="男"; // 在原型链上定义属性
Person.prototype.work = function() {
  console.log('在原型链上定义函数')
}

// es5的静态方法（是直接写在Person这个对象上的，而不是写在Person的实例上的，实例是无法访问到对应的方法的）
Person.staticFn = function () {
  console.log('我是静态方法')
}

var p = new Person();
console.log(p.name)
Person.staticFn()

// es5中如何实现继承

	// 父类
function Parent() {
  this.name="parent";
  this.age=100;
  this.run = function () {
    console.log('跑的贼快')
  }
}
Parent.prototype.work = function () {
  console.log('一天要跑10个小时')
}
//方法一 改变this指向继承（对象冒充）,可以继承父类的构造函数中的方法，但是无法继承原型链中的方法
function Child() {
  Person.call(this); // this指向的是Person中的this
}
let child = new Child();
child.run(); // 跑的贼快
child.work(); // 会直接报错 child.work() is not a function

// 方法二： 原型链继承
	// 既会继承原型链上的方法和属性，也会继承构造函数中的方法和属性
	// 原型链继承的缺陷：实例化子类的时候无法给父类传参，因此需要使用原型链加对象冒充组合继承
function Child1() {}
Child1.prototype=new Parent(); // 将Parent的实例挂载到Child1的原型上，达到继承Parent的原型链中的方法
let child = new Child();
child.run(); // 跑的贼快
child.work(); // 一天要跑10个小时



// 因此，一般如果要实现一个完整的继承，，是需要原型链继承和对象冒充继承组合使用
function Parent1(name, age) {
  this.name=name;
  this.age=age;
  this.run=function() {....}
}
Parent1.prototype.work=function() {...}
function Child2(name,age) {
  Parent1.call(this,name,age); // 对象冒充，this指向Parent1的this
}
Child2.prototype=Parent1.prototype; // 将Parent1的原型链对象挂载到Child2的原型链上
let child = new Child('张三', 30);
child.run();
child.work(); 




```

###### es6定义类结合ts语法

```js
class Person{
    name:string; // 类里面的属性
    constructor(name:string) { // 构造函数，在类进行实例化的时候调用
        this.name = name;
    }
    run ():void {
        console.log(this.name);
    }
}
let per:any = new Person('张三');
per.run();
```

###### ts中实现继承  *extends* *super*

```js
class Parent{
    name:string;
        constructor(name:string) {
        this.name=name;
    }
    run():void {
        console.log(this.name);
    }
    work():void {
      console.log('我是Parent');
    }
}
class Child extends Parent{ // extends表示继承Parent
    constructor(name:string) {
        super(name); // super表示调用父类的constructor函数，将值传入到父类的构造函数中
    }
    work():void {
      console.log('我是Child');
    }
}
let child = new Child('李四');
child.run();
child.work(); // 我是child

// 如果子类中的方法和父类中的方法的函数名，参数都相同，则表示函数进行了重写
```

###### 类里面的修饰符 *public protected private static*

```txt
public: 共有的     在类里面，类外面，子类都可以访问
protected: 受保护的 	在类里面，子类里面可以访问，在类外面不能访问
private: 私有的	在类里面可以访问，在子类，类外部都不能访问

// 属性如果不加修饰符，默认为public
```

* protected

```js
class Pub{
    protected name:string;
    constructor(name:string) {
        this.name=name;
    }
    run ():void {
        console.log(this.name);
    }
}
var p = new Pub('张三---asas')
alert(p.name) // p.name能正常打印出来，是因为ts编译成了js，但是实际上在ts代码只中是会报错的，无法在类的外部访问protected的属性
```

* private

```js
class Pub{
    protected name:string;
    constructor(name:string) {
        this.name=name;
    }
    run ():void {
        console.log(this.name);
    }
}
var p = new Pub('张三---asas')

alert(p.name)// 会报错

class Child extends Pub{
  constructor(name:string) {
    super(name);
  }
  run():void {
    console.log(this.name) // 此处会报错，private修饰的变量只能在 当前类 里面访问，其他的任何类都不能访问
  }
}
```

* **静态方法** 关键字static

```js
class Person{
  name:string;
	constructor(name:string) {
    this.name=name;
  }
	static print() {
    // !!!注意，静态方法里面无法直接调用lei里面的属性，会报错
    // 如果需要调用，则需要将要调用的属性该成静态属性
    console.log(this.name)
  }
}
```

#### 多态

解释：父类定义一个方法，但是不实现，让继承他的子类去实现，每一个子类的表现形式都不一样

*多态属于继承的一种*

```js
class Animal{
    name:string;
    constructor(name:string) {
      this.name=name;
    }
    eat():void {} // 父类定义一个方法，但是不去实现它，由子类去实现
}
class Dog extends Animal{
    constructor(name:string) {
    super(name);
    }
    eat():void {
    console.log(`${this.name}吃肉`)
    }
}
class Cat extends Animal{
    constructor(name:string) {
    super(name);
    }
    eat():void {
    console.log(`${this.name}吃鱼`)
    }
}
let dog = new Dog('狗');
dog.eat();
let cat = new Cat('猫');
cat.eat();
```

#### ts中的抽象类 *abstract*

它是提供其他类继承的基类，不能 **直接被实例化**

*用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类（子类）中实现*

```js
// abstract抽象方法  只能  放在抽象类里面 
// 抽象类和抽象方法用来  定义标准
// 比如，要求Animal的所有的  子类  必须包含eat这个方法
abstract class Animal{
  name:string;
	constructor(name:string) {
    this.name=name;
  }
// 划重点
  abstract eat():any;
}
// 抽象类的子类必须实现抽象父类中的抽象方法
class Dog extends Animal{
  constructor(name:string) {
    super(name);
  }
  eat():any {
    console.log(`${this.name}吃肉`)
  }
}
class Cat extends Animal{
  constructor(name:string) {
    super(name);
  }
  eat():any {
    console.log(`${this.name}吃鱼`)
  }
}
```

###### 多态与抽象类的区别

多态---子类可以实现父类定义的方法，也可以不实现父类定义的方法

抽象类---父类中定义的抽象方法，其子类 必须 要实现

#### 接口

##### 接口 ---- **interface**关键词

***行为和动作的规范，对批量方法进行约束***

```js
// 接口的写法
interface methods1 {
  firstName:string; // 注意：必须要使用;来结尾，而不是使用，结尾
  secondName:string;
  gender?:string; // 接口的可选属性，可传可不传
}
// 表示该函数传入的参数必须要满足接口methods，也就是methods1中定义的变量必须要都包含才行，否则编译的时候会报错
function interFn1(params:methods1):void {
  
}
// ⚠️注意：在调用interFn1函数的时候，如果这样传参的话
  interFn1({
    firstName: '张',
    secondName: '三',
    age: 20 // 这样穿参的话age回报错，因为在接口中之定义了两个字段，没有定义age这个字段
  })
```

##### 定义函数类型的接口

###### 对方法传入的 **参数** 以及 **返回值** 进行约束

```js
interface interFn {
  (name:string, age:number):string;
}
let md:interFn = function (name:string, age:number):string {
   return name+age;
}
alert(md('张三', 20))
```

###### 可索引接口 ----- 对数组/对象的约束（不常用 ）

```js
// 接口对数组的约束
interface _array {
  [index:number]:string // 数组的约束，数组元素只能是字符串
}
let arr:_array = ['aaa', 'bbb']; //接口对数组进行了一个约束，只能是字符串
console.log(arr[0]); // 'aaa'

// 接口对对象的约束
interface userObj {
  [index:string]:string
}
let obj:userObj = {name: '张三'} // 当切仅当只能传一个key_value
```

###### 类类型接口 （对类的约束 和抽象类有点相似） ----- ⚠️经常使用

```js
// 定义接口

// 接口中定义的属性和函数，在类中都必须要定义，否则会报错，但是
// 在接口中定义的函数的参数，在实现接口的类中可以不定义
interface Ani {
    name:string;
    eat(food:string):void;
}

class dd implements Ani {
    name:string
    constructor(name:string) {
        this.name = name
    }
		
    eat(food:string):string {
        console.log(this.name+"吃"+ food +"，多管闲事!")
        return this.name;
    }
}
let d = new dd('小黑');
console.log(d.eat('老鼠')); // 小黑吃老鼠，多管闲事

class cc implements Ani {
    name:string
    constructor(name:string) {
        this.name = name
    }
    eat() {
        console.log(this.name+"吃鱼")
    }
}

let c = new cc('花花');
c.eat(); // 花花吃鱼
```

###### 接口的扩展 (接口可以继承接口)

```js
interface Animal {
    eat():void;
}
interface Person extends Animal {
    work():void;
}
class Progrommer {
  name:string
  constructor(name:string) {
    this.name=name
  }
	coding():void {
    console.log('写代码')
  }
}
class Web extends Progrommer implements Person {
    constructor(name:string) {
        super(name);
    }
    eat() {
        console.log(this.name + '吃饭')
    }
    work() {
        console.log(this.name + '上班挣钱')
    }
}
let web = new Web('小明');
web.eat();
web.work();
web.coding();
```

#### 泛型

​	解决 类 接口 方法 的复用性以及对不特定数据类型的支持

##### 泛型的定义和泛型 **函数**

```js
// 定义泛型的时候，使用<>来定义，<>中的变量可以是任意的，但是一般都是用T表示，这个T表示的传入的类型
function fx<T>(value:T):T {
    return value;
}
console.log(fx<number>(123)); // 123
console.log(fx<string>('123')); // '123'
```

##### 泛型 --- 定义类

```js
// 泛型可以进行类型校验，如果使用any，则默认放弃了类型校验
class minClass<T> {
    protected lists:T[]=[];
    constructor() {}
    add(value:T):void {
      this.lists.push(value);
    }
    minNum():T {
    	let minValue = this.lists[0];
    	this.lists.forEach(item => {
        if (minValue > item) minValue = item;
    	})
      return minValue;
    }
}
let min = new minClass<number>(); // 实例化对象，并且指定了T的类型是number类型
min.add(20);
min.add(10);
min.add(55);
min.add(200);
console.log(min.minNum()); // 10

let min1 = new minClass<string>(); // 实例化对象，并且指定了T的类型是string类型
min1.add('a');
min1.add('c');
min1.add('f');
min1.add('g');
console.log(min1.minNum()); // 'a'
```

##### 泛型 **接口**

```js
// 泛型函数接口
// 方法一：
interface configfx1 {
    <T>(value:T):T;
}
let getValue1:configfx1 = function<T>(value:T):T {
    return value;
}
console.log(getValue1<number>(10086)); // 10086

// 方法二
interface configfx2<T> {
    (value:T):T;
}
function getValue2<T>(value:T):T {
    return value;
}
let getDate:configfx2<string> = getValue2;
let val = getDate('12345')
console.log(val) // '12345'
```

##### 泛型类 -- 把类作为参数类型

```js
class User {
    username:string | undefined;
    password:string | undefined;
}
class MysqlDb<T> {
    add(user:T):boolean {
        console.log(user)
        return true;
    }
}
let u = new User();
u.username = '张三';
u.password = '13143344';

let m = new MysqlDb<User>(); // 将User类作为校验的参数
m.add(u); // {username:'张三',password:'13143344'}
```

`约束规范--定义接口 		代码重用--泛型`

`接口： 在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范`

`泛型： 解决类 接口 方法的复用性`

`注意：如果要实现一个泛型接口，那么实现这个接口的类也必须是泛型类`

#### 模块

注意：在ts1.5中术语发生了变化，"内部模块"被称为"命名空间"，"外部模块"被称为"模块"，模块在其自身的作用域里面执行，而不是在全局作用域里面执行。除非导出它！

##### 模块导出的方法

###### export导出

* 使用export导出，可以导出**常量** **函数** **文件** **模块** **对象** **类**
* 在使用import引入的时候，需要加 `{}`才能正常引入
* export不能直接导出一个 **变量** 或者具体的一个 **值** ，它导出的是一个 **表达式** 或者 **语句**  或者直接导出 `{}`
  * 错误写法
  * `let str='ascv'; export str;`
  * `function fn() {}; export fn;`
  * 正确写法
  * `export let str = 'ascv';`
  * `export function fn() {};`
  * `export {str, arr ...}`

**暴露函数和变量**

```js
// a.js中定义
// export暴露方法一：直接暴露出去
export var str = 'xxx';
export function fn() {
  console.log('暴露函数');
}


// export暴露方法二：集中暴露
var str = 'yyyyy';
function ff() {};
export {str, ff}; // import导入方法不变



// 在b.js文件中导入

import {str, fn} from 'a'; // ⚠️：不加.js这个后缀
// str as s 表示用s这个变量来替换掉str这个变量,他们之间的关系是 str === s（全等）
import {str as s, fn as f} from 'a';
// 调用函数时
fn() / f() // 这两种写法都可以
```

**暴露对象**

```js
// a.js
let obj = {}
let arr = []
export {obj, arr};

// b.js
import {obj, arr} from 'a'; // 变量名要相同
```

**暴露class**

```js
//a.js 
export class Test{...}

/*
* 这种暴露方式是错的
* class Test{}
* export Test;
*/

// b.js
import { Test } from 'a.js'
```



###### export default导出

* 在用法上跟export导出几乎一致，没有什么区别，导出class的时候需要注意一下

* 一个模块只能导出 **一次**，可以是**常量** **函数** **文件** **模块 ** **对象** **类**
* 在使用import引入的时候，不需要加`{}`,可以直接用 **任意** 变量接收

**导出class**

```js
// a.js
// 方法一
export default class Test2{
  constructor() {}
}
// 方法二：
class Test1{...}
export default Test1;


// b.js
import TT from 'a';

```

#### 命名空间 namespace

**命名空间和模块之间的区别：**

命名空间： 内部模块，主要用于组织代码，避免命名冲突

模块： ts的外部模块的简称，**侧重代码的复用**(公用的代码抽离出来，放置在一个文件中)，一个模块里可能会有多个命名空间

总结：命名空间就是指，同样名字的命名，在两个不同的namesapce里面是不会存在任何冲突的，实现的功能也可能是不一一样的

```js
class pub{
    name:string | undefined;
    constructor(name:string) {
        this.name=name;
    }
    eat():void{};
}
interface Animal{
    name:string | undefined;
    gender:string |undefined;
    age:number | undefined;
}
namespace A{
  // 将命名空间当成一个模块暴露出来
    export class Dog extends pub implements Animal{
        name:string | undefined;
        gender:string |undefined;
        age:number | undefined;
        constructor(name:string, gender:string, age:number) {
            super(name);
            this.name = name;
        }
        eat():void {
            console.log(this.name+"在吃肉哦！！！！！")
        }
    }
}
let test1 = new A.Dog('狼狗', '公的', 20);
test1.eat();
namespace B{
    export class Dog extends pub implements Animal{
        name:string | undefined;
        gender:string |undefined;
        age:number | undefined;
        constructor(name:string, gender:string, age:number) {
            super(name);
            this.name = name;
        }
        eat():void {
            console.log(this.name+"混的很惨，在吃空气！！！！！")
        }
    }
}
let test2 = new B.Dog('tony', '男', 20);
test2.eat();
```

#### 装饰器

* 是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为
* 通俗的讲装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
* 常见的装饰器：类装饰器、方法装饰器、属性装饰器、参数装饰器
* 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可以传参）
* 是ES7的标准特性之一

###### 类装饰器 ---- 普通装饰器（无法传参）

* 类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义
* 在不修改类的前提条件下扩展类的属性和方法

```js
function logClass(params:any) {
    console.log(params); // params就是当前类Log,只是是以函数的形式呈现出来的 function Log() {...}
    params.prototype.name="装饰器";
    params.prototype.run=function () {
        console.log('run_装饰器');
    }
}
@logClass // logClass函数是Log类的装饰器，注意⚠️：@logClass后面不要加;
class Log{
    constructor() {}
    eat() {}
}
let log:any = new Log();
console.log(log.name); // 输出  装饰器
log.run(); // 输出  run_装饰器
```

###### 类装饰器 ---- 工厂装饰器（可以传参）

































