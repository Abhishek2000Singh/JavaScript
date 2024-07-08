let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

const run = async () => {
    console.log("run..");

    // let a1 = await p1();
    // // console.log(a1);

    // let a2 = await p2();
    // // console.log(a2);

    // let a3 = await p3();
    // // console.log(a3);

    let a1 = p1();
    let a2 = p2();
    let a3 = p3();

    let allA = await Promise.all([a1, a2, a3])
    console.log(allA);
    
    // console.log(a1, a2, a3);
    console.log("successfully runn...");

}
run()