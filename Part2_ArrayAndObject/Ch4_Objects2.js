//singleton

// const tinderUser = new Object()
const tinderUser = {} //non singleton object  and no other differences

tinderUser.id = "123aabc"
tinderUser.name = "John Doe"
tinderUser.age = 30
tinderUser.interests = ["reading", "hiking", "coding"]

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstName : "Harsh",
            lastName:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName)
const obj1 = {1: "A", 2:"B"}
const obj2 = {3: "C", 4:"D"}

// const obj = {obj1, obj2}

//give a empty array in that so that if anymore array need to be copy it will be copied in that empty array as target is {}, sources will be obj1 and obj2
// const obj = Object.assign({}, obj1, obj2) 

const obj = {...obj1, ...obj2} //using spread operator
// console.log(obj);

//Accessing from Database

const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: " Doe",
    },
    {
        id: 3,
        name: "John ",
    }
]

// console.log(users[0].name)
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //first one is key and second one is val every key value is converted in array ,,array in array

console.log(tinderUser.hasOwnProperty('islogged'));
console.log(tinderUser.hasOwnProperty('name'));


