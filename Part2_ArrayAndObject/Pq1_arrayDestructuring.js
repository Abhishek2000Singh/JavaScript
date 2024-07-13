let arr = [3,5,8,9,12,14]
// let [a, , ,...rest] = arr
// console.log(a,rest);

// let {a,b} = { a:1, b:2}
// console.log(a,b);


let arr1 = [3,5,8,1 ]
let obj1 = {...arr1}

console.log(obj1);

function sum(v1,v2,v3) {
    return v1+v2+v3
}

console.log(sum(...arr1));

