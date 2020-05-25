"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = 'xxxxx';
function getdata() {
    console.log('链接数据库，获取数据成功');
    return [{
            title: '11111'
        }];
}
exports.getdata = getdata;
var str = 'asdajsgda';
exports.str = str;
var arrTest = [1, 2, 3, 4];
exports.arrTest = arrTest;
function sum(arr) {
    var num = 0;
    arr.forEach(function (item) {
        num += item;
    });
    return num;
}
exports.sum = sum;
var obj = {};
exports.obj = obj;
var newArr = [];
exports.newArr = newArr;
