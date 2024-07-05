function setUserName(username) {
    //complex DB calls
    this.username = username;
    console.log("called..");
    
}

function createUser(username, email, password){

    // setUserName(username) //only reference is passed ..output will not be there because reference is not holded...therefore execution context will not there so no username is declared. 

    //so to hold the reference we use .call() function
    setUserName.call(this, username) //this is the execution context.. which hold

    this.email = email;
    this.password = password;
}

const chai = new createUser("Harshit", "genius@2000", "123")
console.log(chai);
