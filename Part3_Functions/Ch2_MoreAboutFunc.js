// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(500,200,400)); //only first item will be printed

//use of rest operator or spread operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500)); //used ... to passed more than one params

//for more explaination
function calculateCartPrice(val1, val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,2000,4000)); //val1 =200 and val2= 400

const user = {
    username: "Rahul",
    price: 20,
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
// handleObject({
//     username: "Harsh",
//     price: 30,
// })

const mynewArray = [200,400,500,600]

function returnSecondVAl(getArr){
    return getArr[1];
}

// console.log(returnSecondVAl(mynewArray));
// console.log(returnSecondVAl([400,800,300,100]))
