const user = {
    username: 'Harshit',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (params) {
        // console.log("Got user details from database");      
        // console.log(`Username:${this.username}`);
        // console.log(this);

    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);// when run in browser it give output as window and its properties

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);       
    }

    return this // implicityl define
}

const userOne = new User("Harshit", 12, true);
const userTwo = new User("Abhishek", 11, false); //override the value of first without print the second without using new keyword
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);

