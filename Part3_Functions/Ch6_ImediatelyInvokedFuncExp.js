//Immediately Invoked Functional Expression

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()



//IIFE is a function that is executed immediately after it is defined. It is a way to create a local scope in JavaScript, which can be useful for avoiding global variable pollution and for creating private variables and functions.

(function chai() {   //named iffe
    console.log(`DB CONNECTED`);
})();


//USE SEMICOLON AFTER ENDING OF ONE FUNCTION IF USING IIFE
(() => {
    console.log(`DB CONNECTED TWO`);
})();


//By passing params and arguement 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Harsh')    