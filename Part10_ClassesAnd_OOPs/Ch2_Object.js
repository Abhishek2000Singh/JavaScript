// function multiplyBy5(num){
//     return num * 5;
// }

// multiplyBy5.power = 2; //fucntion can  also behave as an object
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;  //this matlab jisne
    console.log(this.score);
    
}
createUser.prototype.printMe  = function(){
    console.log(`score is ${this.score}`);
    
}

// const tea  =  createUser("tea",250)  
// const chai =  createUser("chai", 25)


// To use the injected function in a prototype we use New keyword 

const chai = new createUser("chai", 25)
const tea  = new createUser("tea",250)

chai.printMe()
chai.increment()

console.log(chai);
console.log(tea);

