"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('hello world');
var a = function () {
    console.log('study');
};
a();
var str = 'true';
str = '111';
console.log(str, 'str');
var num = 123;
num = 456;
// 数组
var arr = [];
var arr1 = ['1', '2', '3'];
var arr2 = [1, 2, 3];
// 元组
var arr3 = [1, '2', true];
var arr4 = [1, '2', true];
// 枚举
var Erro;
(function (Erro) {
    Erro["success"] = "1";
    Erro["fail"] = "-1";
    Erro["wait"] = "0";
})(Erro || (Erro = {}));
var statu = Erro.fail;
console.log(statu);
var num1;
console.log(num1, '未赋值');
num1 = 123;
console.log(num1, '赋值');
function fn() {
    var obj = { name: '张三' };
    var arr = [];
    arr.push(obj);
    return arr;
}
console.log(fn());
// 声明一个返回字符串的函数
var strfn = function () {
    var str = 'qwe';
    return str;
};
// 声明一个返回对象的函数
var objFn = function () {
    var obj = { 'name': '账单' };
    return obj;
};
// 声明一个返回数组的函数
var arrFn = function () {
    var arr = [1, '2', { name: "张三" }];
    return arr;
};
console.log(strfn());
console.log(objFn());
console.log(arrFn());
// 指定传入的参数类型，返回指定类型的数据
function backStr(name, age) {
    var str = name + '----' + age;
    return str;
}
console.log(backStr('小明', 20));
function getInfo(name, age) {
    if (age === void 0) { age = 30; }
    console.log(name + '---' + age);
}
getInfo('zhangsan', 100); // zhangsan---100
getInfo('zhangsan'); // zhangsan---30
function fn44(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(fn44(1, 2, 3, 4, 5));
function info(str) {
    if (typeof str == 'string') {
        return '姓名' + str;
    }
    else {
        return '年龄' + str;
    }
}
;
console.log(info(20));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var per = new Person('张三');
// per.run();
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
    }
    Parent.prototype.run = function () {
        console.log(this.name);
    };
    Parent.prototype.work = function () {
        console.log('我是父类的work');
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.work = function () {
        console.log('我是子类的work');
    };
    return Child;
}(Parent));
var child = new Child('李四');
child.run();
child.work();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.print = function () {
        console.log('静态方法');
        console.log(this.sex);
    };
    Person1.sex = '男';
    return Person1;
}());
var pers = new Person1('张三');
Person1.print();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () { }; // 父类定义一个方法，但是不去实现它，由子类去实现
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5403\u8089");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + "\u5403\u9C7C");
    };
    return Cat;
}(Animal));
var dog = new Dog('狗');
dog.eat();
var cat = new Cat('猫');
cat.eat();
function getInter(param) {
    console.log(param.secondName);
}
var aaa = { secondName: '三', age: 90 };
getInter(aaa);
var md = function (name, age) {
    return name + age;
};
var arrs = [123, 2334];
console.log(arrs['0']);
var dd = /** @class */ (function () {
    function dd(name) {
        this.name = name;
    }
    dd.prototype.eat = function (food) {
        console.log(this.name + "吃" + food + "，多管闲事!");
        return this.name;
    };
    return dd;
}());
var d = new dd('小黑');
console.log(d.eat('老鼠'));
var cc = /** @class */ (function () {
    function cc(name) {
        this.name = name;
    }
    cc.prototype.eat = function () {
        console.log(this.name + "吃鱼");
    };
    return cc;
}());
var c = new cc('花花');
c.eat();
var Progrommer = /** @class */ (function () {
    function Progrommer(name) {
        this.name = name;
    }
    Progrommer.prototype.coding = function () {
        console.log('写代码');
    };
    return Progrommer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '吃饭');
    };
    Web.prototype.work = function () {
        console.log(this.name + '上班挣钱');
    };
    return Web;
}(Progrommer));
var web = new Web('小明');
web.eat();
web.work();
web.coding();
function fx(value) {
    return value;
}
console.log(fx(123));
console.log(fx('123'));
var minClass = /** @class */ (function () {
    function minClass() {
        this.lists = [];
    }
    minClass.prototype.add = function (value) {
        this.lists.push(value);
    };
    minClass.prototype.minNum = function () {
        var minValue = this.lists[0];
        this.lists.forEach(function (item) {
            if (minValue > item)
                minValue = item;
        });
        return minValue;
    };
    return minClass;
}());
var min = new minClass();
min.add(20);
min.add(10);
min.add(55);
min.add(200);
console.log(min.minNum());
function getValue(value) {
    return value;
}
var getDate = getValue;
var val = getDate('12345');
console.log(val); // '12345'
var getValue1 = function (value) {
    return value;
};
console.log(getValue1(10086)); // 10086
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = '张三';
u.password = '13143344';
var m = new MysqlDb();
m.add(u);
// es5中没有export模块化这个概念，所以在浏览器中运行时会报错
// import {arrTest, sum} from './modules/db';
// import fnnn from './modules/exportDefault';
// import {Test} from './modules/exportClass';
// console.log(fnnn(), '0000000')
// console.log(sum(arrTest), '1111111');
// let test = new Test();
// console.log(test.run())
var pub = /** @class */ (function () {
    function pub(name) {
        this.name = name;
    }
    pub.prototype.eat = function () { };
    ;
    return pub;
}());
var A;
(function (A) {
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, gender, age) {
            var _this = _super.call(this, name) || this;
            _this.name = name;
            return _this;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "在吃肉哦！！！！！");
        };
        return Dog;
    }(pub));
    A.Dog = Dog;
})(A || (A = {}));
var test1 = new A.Dog('狼狗', '公的', 20);
test1.eat();
var B;
(function (B) {
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, gender, age) {
            var _this = _super.call(this, name) || this;
            _this.name = name;
            return _this;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "混的很惨，在吃空气！！！！！");
        };
        return Dog;
    }(pub));
    B.Dog = Dog;
})(B || (B = {}));
var test2 = new B.Dog('tony', '男', 20);
test2.eat();
function logClass(params) {
    console.log(params); // params就是当前类Log,只是是以函数的形式呈现出来的 function Log() {...}
    params.prototype.name = "装饰器";
    params.prototype.run = function () {
        console.log('run_装饰器');
    };
}
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.eat = function () { };
    Log = __decorate([
        logClass
    ], Log);
    return Log;
}());
var log = new Log();
console.log(log.name); // 输出  装饰器
log.run(); // 输出  run_装饰器
function logClass_param(params) {
    return function (target) {
        console.log(params);
        console.log(target);
    };
}
var Log_params = /** @class */ (function () {
    function Log_params() {
    }
    Log_params = __decorate([
        logClass_param('hahahah')
    ], Log_params);
    return Log_params;
}());
var log_params = new Log_params();
// console.log(log_params
