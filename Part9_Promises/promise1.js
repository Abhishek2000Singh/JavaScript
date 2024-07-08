//It's is also a object im itself 
const promiseOne = new Promise(function (resolve, reject) {
    //Do an asyn task
    //DB call , cryptography,network

    setTimeout(function () {
        // console.log("Async task is complete");
        resolve() //connecting with then()
    }, 1000);
})

// promiseOne.then()
promiseOne.then(function () {
    // console.log("Promise consumed");  //then should be connected with resolve
});

//another way
// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         // console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     // console.log("Promise consumed 2");

// })

//Promise 3 
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ username: "Chai", email: "singh@gmail.com" })
//     }, 1000);
// })

// promiseThree.then(function (user) { //since we connected resolve and then so we can expect the value by default so value of resolve will be passed to then as user
//     console.log(user);

// })

//Promise 4
const promiseFOur = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Harshit", password: "123" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

// // promiseFOur.then().catch()
promiseFOur.then((user) => { //avoid callback hell
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);

}).finally(() => console.log("Finally the promise is resolved or rejected")
)


//Promise 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123423" })
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000);
})

// using another syntax instead of then we will use async()
// it cant directly handle the errors
// async function consumePromiseFive() {
//     const res = await promiseFive
//     console.log(res);
// }
// consumePromiseFive()


//therefore use it in try and catch block shown below

async function consumePromiseFive() {
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// using async and then 
async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response);

        const data = await response.json()
        console.log(data);
    } catch (error) { 
        console.log("E: ",error);
    }
}
getAllUsers()

//writing the same func above with then catch

// fetch('https://api.github.com/users/abhishek2000singh')
// .then(function (response) {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//         console.log(error);
//     })