// let myName = "Harshit    "
// let channel  = "chaiaurcode    "
// console.log(myName.length); //output = 11 which is not good
// console.log(myName.trim().length);

// console.log(myName.trueLength); //we need property of truelength so we create prototype



let myHeros = ["thor", "ironMan", "Hulk"]

let heroPower = {
    thor: "hammer",
    spiderman : "sing",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harshit = function (){
    console.log(`Harshit is present in all Object`);
    
}

Array.prototype.heyHarshit= function(){
    console.log(`Harshit says hello!`);
    
}

heroPower.harshit()
myHeros.harshit()
myHeros.heyHarshit()
// heroPower.heyHarshit() //doesnt share the power because that is only injected for arrays


//*****************INHERITANCE*************

const user = {
    name: "Harshit",
    email : "chai@google.com"
}

const teacher = {
    makeVideos: true
}

const teacherSupport={
    isAvailable :  false
}

const taSupport = {
    makeAssignment : 'Js Assignment',
    fullTime :  true,
    __proto__ : teacherSupport
}

teacher.__proto__= user;

//modern syntax

Object.setPrototypeOf(teacherSupport, teacher) //prototpye inheritance


let anotherUsername = "chaiAurCode        "

String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Harshit".trueLength()
"ColdCoffee".trueLength()
console.log(taSupport.__proto__);
