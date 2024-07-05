class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);       
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "email@gmail.com", "1234")
console.log(chai);
chai.addCourses();
chai.logMe()
console.log('******************************************\n');

const masalaChai = new User("masalaChai")
console.log(masalaChai);
masalaChai.logMe();


console.log(chai===masalaChai);
console.log(User===Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(Teacher instanceof User);

