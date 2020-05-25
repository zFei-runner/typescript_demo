console.log('TypeScript')
var str:Number = 1;
var arr:number[] = [1,2,3];
function fn():object {
    return {name:"张三"}
}
var obj:undefined;
console.log(obj)
function fn1():string {
    return '姓名';
}
var nam:string = "zhangsan";
fn1();
fn();
console.log(nam, str, arr);
var flag:boolean=true;
var object:Object={};
var arr1:any[]=[1,"1",{name:10},true]
function fn2(arr:any):void {
    for (var i=0;i<arr.length;i++) {
        console.log(arr[i]);
    }
}
fn2(arr1);
function fn3(...result:number[]) {
    var sum:number=0;
    for (var i=0;i<result.length;i++) {
        sum+=result[i];
    }
    console.log(sum);
    alert(111)
}