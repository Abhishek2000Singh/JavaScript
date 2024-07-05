//Properites short form is props

class User{
    constructor(username){
        this.username = username;
    }

    logMe (){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){  //static wont allow to give access to every object instanciated from it
        return `123`
    }
}

// const harsh =  new User("Harshit")
// console.log(harsh);
// console.log(harsh.logMe());
// console.log(harsh.createId()); //will throw an error after using static keyword

class Teacher extends User{
    constructor(username,email){
        super(username); //super is used to call the parent class constructor
        this.email = email
    }
}
const harshTeacher = new Teacher("Harshit","harshit@gmail.com")
// console.log(harshTeacher);
harshTeacher.logMe();
console.log(harshTeacher.createId());


