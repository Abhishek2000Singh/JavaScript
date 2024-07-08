
let p = async()=>{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("This is not accepted"))
    },3000)
})
}
let a = async function () {
    try {
        
        let c = await p()
        console.log(c);
    } catch (error) {
        console.log(error);
        console.log("This error has been handled");
        
    }
    
}
a()