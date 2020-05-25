"use strict";
console.log('TypeScript');
var str = 1;
var arr = [1, 2, 3];
function fn() {
    return { name: "张三" };
}
var obj;
console.log(obj);
function fn1() {
    return '姓名';
}
var nam = "zhangsan";
fn1();
fn();
console.log(nam, str, arr);
var flag = true;
var object = {};
var arr1 = [1, "1", { name: 10 }, true];
function fn2(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
fn2(arr1);
function fn3() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    console.log(sum);
}
