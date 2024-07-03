//stack (primitive) => copy of data is send and the if changed then it's copies value will be changed not the original ones
//  Heap(Non-Primitive) (reference) => reference of data is send and if changed then original data will be changed   


let myYoutb = "Harsh@DotCom"; //store in stack

let anothername = myYoutb;
anothername = "HarshitCode"
console.log(anothername);
console.log(myYoutb);

let userOne = {  //non primitive, value stored in heap
    copy: "Before change",
    email:"abhisheksingh20200696@gmail.com",
    upi: "user@ybl"
}
console.log(userOne);

//value from the above reference if value of userone or two is changed then it will be reflected in the heap or orignal data
let userTwo = userOne  

//changing the value
userTwo.email = "geniusabhishek@gmail.com"
userTwo.copy = "After Change"
console.log(userOne);
console.log(userTwo);

