function one() {
    const username = "Harsh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    /* console.log(website);*/ //variable invalid can access outside the scope two()

    two()
}

// one()

//********************Interesting***************** */

console.log(addone(5)); //will not give error
function addone(num) {
    return num + 1;
}


// console.log(addTwo(5)); //will give error before defining it

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5)); 
