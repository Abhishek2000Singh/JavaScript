const marvel_heros = ["thor", "Ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros); //here array is taken as single language
// console.log(marvel_heros[3][1]); 

// const newheros = marvel_heros.concat(dc)
// console.log(newheros);

//SPREAD OPERATOR

const all_heros = [...marvel_heros, ...dc]
console.log(all_heros);

const another_array = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr = another_array.flat(Infinity) //flatten the array return a single array and .flat(2) , the number inside the flat method defines the depth of the array which needed to be flattens

console.log(realarr); 

console.log(Array.isArray("Harshit"))
console.log(Array.from("Harshit"))
console.log(Array.from({name:"harshit"})) //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));

