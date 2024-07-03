const user = {
    username: 'John',
    price: 999,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}!to Website.`); //refering the current context or value  using this
        // console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
let username = "Abhishek"
// console.log(this.username);
console.log(this);
}

chai()

// const chai = function(){
//     let username = "Abhishek"
//     console.log(this.username);
// }

// const chai1 = () => {
//     let username = "Abhishek"
//     console.log(this.username);
// }


// chai1()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2; //implicit return when one line statement
// const addTwo = (num1, num2) => (num1 + num2) //implicit return when one line statement no use of return keyword

const addTwo = (num1, num2) => ({username: "Harsh"}) // to return object 

// console.log(addTwo(3,4));

// const myArr = [2,5,3,7,8]

    
    
