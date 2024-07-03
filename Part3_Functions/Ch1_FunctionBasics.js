function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName() //() denotes here for execution
// sayMyName -> for reference

// function addTwoNum(number1, number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNum(number1, number2) { //parameters
    return (number1 + number2);
}

// addTwoNum(3,5)  //passing the arguements

//can store in variable also
const result = addTwoNum(3, 5);

// console.log("Result: ",result);

function loginUserMessage(username="sam") {
    if (username=== undefined) {
        console.log("Please Enter the username");
        return;
    }
    return `${username} just logged in`
}

console.log( loginUserMessage()); //return undefined if no parameter or default parameter is set
console.log( loginUserMessage("Harsh")); 


