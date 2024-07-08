let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved')
        }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('p2 resolved')
        reject(new Error("Error detected"))
        }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved')
        }, 3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

/*NOW IF WE WANT TO PRINT THE VALUE AT THE SAME TIME AFTER IT RESOLVES ..below is solution*/

// let promise_all = Promise.all([p1,p2,p3]); //return an array of above promise
// but promise_all will not show any value if anyone of the value is rejected...so to handle that like if we need to print rest value then we use promiseSettled 

let promise_all = Promise.allSettled([p1,p2,p3])
promise_all.then(function(value){
    console.log(value);
})