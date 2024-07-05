//For of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}

//Maps
const map = new Map();

map.set('name', 'John');
map.set('USA', 'United States of America');
map.set('USA', 'United States of America');

// console.log(map); //prints unique value

for (const key of map ) {
    // console.log(key);
    
}
//destructuring of Array so as to print key value separately
for (const [key, value] of map ) {
    // console.log(key,"-:",value);
    
}

//for keys only
for (const [key, value] of map ) {
    // console.log(key,"-:",value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'godofWAR'
}

for (const [key , value] of myObject) {
    // console.log(key,"-:",value);
}  //will not iterate in this way

for (const [key , value] of Object.entries(myObject)) {
    console.log(key,"-:",value);
}  //will  iterate in this way

