//singleton
// object.create


//object literals

const mySym = Symbol("key1")

const jsUser = {
name : "Harshit",
"full name": "HArshit Singh",
"lastname": "Singh",
[mySym]: "mykey1", //to access as symbol
age : 25,
location : "Kolkata",
email : "harshit@gmail.com",
isLoggedIn : false,
lastLoginDay : ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"]); //give access as string
// console.log(jsUser["full name"]); //can be only accessed in ["as a string"]
// console.log(jsUser.lastname); //it can be accessed in both the types since no spaces are there inbetween

// console.log(jsUser.mySym);
// console.log(jsUser[mySym]); //correct way of writing it as symbol
// console.log(typeof mySym);
// console.log(typeof jsUser.mySym);

jsUser.email = "harsh@chatgpt"
// Object.freeze(jsUser)
jsUser.email = "harsh@microsoft.com"
// console.log(jsUser);

// console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello Js User");
}
jsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
