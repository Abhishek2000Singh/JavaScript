// const hello = require("./module1")

// hello.hello()
// hello.advhello("Abhishek")

// in above way there will be complex way to do this stuff for more data so to make it easy there is another way to handle this things so as to avoid this much of mess  thing

//2ND way of doing this is to destructure this and perform the simpler one

//These  Are the example of the common js module 
// const {hello,advhello} = require("./module1")
// hello()
// advhello("Abhishek")


//ES6 
import harshit,{ hello, advhello} from "./module2.js"c
//harshit will not be imported as object it will directly be imported
hello()
advhello("Abhishek")
harshit()
