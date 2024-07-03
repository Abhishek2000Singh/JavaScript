const myObject ={
    js: 'JavaScript',
    cpp: 'C++',
    java: 'Java',
}

for (const key in myObject) {
    // console.log(key);   
}
for (const key in myObject) {
    // console.log(myObject[key]);   
}

for (const key in myObject) {
    // console.log(`${key} shortcut is  for ${myObject[key]}`);   
}

const programming = ["js", "ruby", "java", "javaScript"]

for (const key in programming) {
        // console.log(key);  
        // const element = programming[key];
        // console.log(element);
        
}

//Maps
const map = new Map();
map.set('name', 'John');
map.set('USA', 'United States of America');
map.set('EUR', 'Europe');
map.set('USA', 'United States of America');

// for (const key in map) {
// console.log(key);
// }  // not iterable


//for each
map.forEach((value, key) => {
    // console.log(`${key} is ${value}`)
})


