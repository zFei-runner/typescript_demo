let url:string = 'xxxxx';

export function getdata():any[] {

    console.log('链接数据库，获取数据成功');
    return [{
        title: '11111'
    }]
}

let str:string = 'asdajsgda';

let arrTest:number[] = [1,2,3,4];

function sum(arr:number[]):number {
    let num:number = 0;
    arr.forEach(item => {
        num += item;
    })
    return num;
}

export {str, arrTest, sum};

let obj = {};
let newArr:number[] = [];
export {obj, newArr}