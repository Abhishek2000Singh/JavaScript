const a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000)
    })
}

(
    async () => {
        const text = await a("Hello")
        // console.log(text);

        const text2 = await a("World")
        // console.log(text2);

    }
)()


function sum(a,b,c) {
    return a+b+c;
}

let x = [1,3,5]
console.log(sum(...x));


function simple(p,r,t) {
    return (p*r*t)/100
}
console.log(simple(1000,5,1));
