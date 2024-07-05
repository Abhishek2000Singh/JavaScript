const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); //cant override

// const mynewObject = Object.create(null);

const chai = {
    name: "ginger chaii",
    price: 250,
    isAvailable : true,

    orderChai: function(){
        console.log("Chai nhi bani");
        
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));       // will give undefined because we are passing object chai which is not a property but the variable name,price etc are its property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//Now we are also allowed to change some the property
Object.defineProperty(chai, "name", {
    // writable: false,
    // enumerable: false
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// chai.name = "Harshit"
// console.log(chai.name);
// console.log(chai);


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}


