let a = {
    name:"Harshit",
    language : "Javascript",
    run : ()=>{
        console.log("run")
    }
}
console.log(a);

let p = {
    run : ()=>{
        console.log("run");

    }
}
a.__proto__ = p;
a.run()