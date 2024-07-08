let p =  new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    
    setTimeout(() => {
        console.log("i am a promise and i am fullfiled")
        resolve(true)
        // reject(new Error("I m ERror"))
    }, 5000);
})
p.then((value)=>{
    // console.log(value);
    return  value
}).then((value)=>{
    console.log(value);
    
})
console.log(p);

// let p1 =  new Promise((resolve, reject)=>{
//     console.log("Promise is pending");
    
//     setTimeout(() => {
//         console.log("i am a promise and i am rejected")
//         // resolve()
//         reject(new Error("I m ERror"))
//     }, 5000);
// })


// console.log(p1);
