// falsy value are -> false ,0 ,-0, BigInt On, "" , null, NaN, undefined

//truthy value are -> true, 1, ,"0" or "1" ,"anything like string", [], {}, function(){}

//HOW TO CHECK IF ARRAY IS EMPTY

const userEmail = []
if (userEmail.length === 0) {
    // console.log("Empty Array");

}

//HOW TO CHECK IF Object IS EMPTY

const user = {
    // name: "John",
    // age: 30,
}
if (Object.keys(user).length === 0) {
    // console.log("Empty Object");
}
else {
    // console.log("Not Empty Object");
    // console.log(user.name);̥

}

//NULLISH COALESCING OPERATOR (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //to handle the situation like null and other values or from value to another value...made for only null and undefined 


val1 = null ?? 10 ?? 15
console.log(val1);

//ternary operator'
// condition ? true: false

const  iceTeaPrice = 100;
iceTeaPrice  <= 80 ? console.log("less "): console.log("more than");
;
