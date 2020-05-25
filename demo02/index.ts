console.log('hello world');
let a = () => {
    console.log('study');
}
a();

var str: string = 'true';
str = '111';
console.log(str, 'str');

var num: number = 123
num = 456;
// 数组
var arr: [] = []
var arr1: string[] = ['1', '2', '3']
var arr2: Array<number> = [1, 2, 3]
// 元组
var arr3: [number, string, boolean] = [1, '2', true];

var arr4: Array<any> = [1, '2', true]

// 枚举
enum Erro {
    'success' = '1',
    'fail' = '-1',
    'wait' = '0'
}
let statu: Erro = Erro.fail;

console.log(statu)

var num1: number | undefined;
console.log(num1, '未赋值');
num1 = 123;
console.log(num1, '赋值')

function fn(): Array<any> {
    var obj: any = { name: '张三' };
    let arr: Array<any> = [];
    arr.push(obj);
    return arr;
}
console.log(fn())

// 声明一个返回字符串的函数
let strfn = function (): string {
    var str = 'qwe';
    return str;
}
// 声明一个返回对象的函数
let objFn = function (): Object {
    let obj = { 'name': '账单' };
    return obj;
}
// 声明一个返回数组的函数
let arrFn = function (): Array<any> {
    let arr: Array<any> = [1, '2', { name: "张三" }];
    return arr;
}
console.log(strfn());
console.log(objFn());
console.log(arrFn());

// 指定传入的参数类型，返回指定类型的数据
function backStr(name: string, age: number): string {
    let str = name + '----' + age;
    return str;
}
console.log(backStr('小明', 20));

function getInfo(name: string, age: number = 30): void {
    console.log(name + '---' + age)
}
getInfo('zhangsan', 100) // zhangsan---100
getInfo('zhangsan') // zhangsan---30

function fn44(a: number, ...result: number[]): any {
    var sum = a;
    for (let i = 0; i < result.length; i++) {
        sum += result[i]
    }
    return sum;
}
console.log(fn44(1, 2, 3, 4, 5));

function info(name: string): string;
function info(age: number): string;
function info(str: any): any {
    if (typeof str == 'string') {
        return '姓名' + str;
    } else {
        return '年龄' + str
    }
};

console.log(info(20))

class Person {
    name: string; // 类里面的属性
    constructor(name: string) { // 构造函数，在类进行实例化的时候调用
        this.name = name;
    }
    run(): void {
        console.log(this.name);
    }
}
let per: any = new Person('张三');
// per.run();

class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log(this.name);
    }
    work(): void {
        console.log('我是父类的work')
    }
}
class Child extends Parent { // extends表示继承Parent
    constructor(name: string) {
        super(name); // super表示调用父类的constructor函数，将值传入到父类的构造函数中
    }
    work(): void {
        console.log('我是子类的work')
    }
}
let child = new Child('李四');
child.run();
child.work();

class Person1 {
    public name: string;
    static sex: string = '男';
    constructor(name: string) {
        this.name = name;
    }
    static print() {
        console.log('静态方法');
        console.log(this.sex);
    }
}

let pers = new Person1('张三');
Person1.print()

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void { } // 父类定义一个方法，但是不去实现它，由子类去实现
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(`${this.name}吃肉`)
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(`${this.name}吃鱼`)
    }
}
let dog = new Dog('狗');
dog.eat();
let cat = new Cat('猫');
cat.eat();

interface info {
    firstName?: string;
    secondName: string;
}
function getInter(param: info) {
    console.log(param.secondName)
}
let aaa = { secondName: '三', age: 90 }
getInter(aaa);

interface interFn {
    (name: string, age: number): string;
}
let md: interFn = function (name: string, age: number): string {
    return name + age;
}
// alert(md('张三', 20))

interface _array {
    [index: string]: any
}

let arrs: _array = [123, 2334];
console.log(arrs['0'])

interface Ani {
    name: string;
    eat(food: string): void;
}

class dd implements Ani {
    name: string
    constructor(name: string) {
        this.name = name
    }
    eat(food: string): string {
        console.log(this.name + "吃" + food + "，多管闲事!")
        return this.name;
    }
}
let d = new dd('小黑');
console.log(d.eat('老鼠'));

class cc implements Ani {
    name: string
    constructor(name: string) {
        this.name = name
    }
    eat() {
        console.log(this.name + "吃鱼")
    }
}

let c = new cc('花花');
c.eat();

interface Animal1 {
    eat(): void;
}
interface Person2 extends Animal1 {
    work(): void;
}
class Progrommer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(): void {
        console.log('写代码')
    }
}
class Web extends Progrommer implements Person2 {
    constructor(name: string) {
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

function fx<T>(value: T): T {
    return value;
}
console.log(fx<number>(123));
console.log(fx<string>('123'));

class minClass<T> {
    protected lists: T[] = [];
    constructor() { }
    add(value: T): void {
        this.lists.push(value);
    }
    minNum(): T {
        let minValue = this.lists[0];
        this.lists.forEach(item => {
            if (minValue > item) minValue = item;
        })
        return minValue;
    }
}
let min = new minClass<number>();
min.add(20);
min.add(10);
min.add(55);
min.add(200);
console.log(min.minNum());

interface configfx<T> {
    (value: T): T;
}
function getValue<T>(value: T): T {
    return value;
}
let getDate: configfx<string> = getValue;
let val = getDate('12345')
console.log(val) // '12345'

interface configfx1 {
    <T>(value: T): T;
}
let getValue1: configfx1 = function <T>(value: T): T {
    return value;
}

console.log(getValue1<number>(10086)); // 10086


class User {
    username: string | undefined;
    password: string | undefined;
}
class MysqlDb<T> {
    add(user: T): boolean {
        console.log(user)
        return true;
    }
}
let u = new User();
u.username = '张三';
u.password = '13143344';

let m = new MysqlDb<User>();
m.add(u);

// es5中没有export模块化这个概念，所以在浏览器中运行时会报错
// import {arrTest, sum} from './modules/db';
// import fnnn from './modules/exportDefault';
// import {Test} from './modules/exportClass';
// console.log(fnnn(), '0000000')
// console.log(sum(arrTest), '1111111');
// let test = new Test();
// console.log(test.run())

class pub {
    name: string | undefined;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void { };
}
interface Animala {
    name: string | undefined;
    gender: string | undefined;
    age: number | undefined;
}
namespace A {
    export class Dog extends pub implements Animala {
        name: string | undefined;
        gender: string | undefined;
        age: number | undefined;
        constructor(name: string, gender: string, age: number) {
            super(name);
            this.name = name;
        }
        eat(): void {
            console.log(this.name + "在吃肉哦！！！！！")
        }
    }
}
let test1 = new A.Dog('狼狗', '公的', 20);
test1.eat();
namespace B {
    export class Dog extends pub implements Animala {
        name: string | undefined;
        gender: string | undefined;
        age: number | undefined;
        constructor(name: string, gender: string, age: number) {
            super(name);
            this.name = name;
        }
        eat(): void {
            console.log(this.name + "混的很惨，在吃空气！！！！！")
        }
    }
}
let test2 = new B.Dog('tony', '男', 20);
test2.eat();

function logClass(params: any) {
    console.log(params); // params就是当前类Log,只是是以函数的形式呈现出来的 function Log() {...}
    params.prototype.name = "装饰器";
    params.prototype.run = function () {
        console.log('run_装饰器');
    }
}
@logClass
class Log {
    constructor() { }
    eat() { }
}
let log: any = new Log();
console.log(log.name); // 输出  装饰器
log.run(); // 输出  run_装饰器

function logClass_param(params: string) {
    return function (target: any) {
        console.log(params)
        console.log(target)
    }
}
@logClass_param('halavah')
class Log_params {
    constructor() { }
}
let log_params = new Log_params();
// console.log(log_params