const coding = ["js", "ruby", "java", "javaScript", "Python"]

//callback function dont have names we directly use-------> func("inside it if any paramter name or var name"){}
coding.forEach(function (item) {
    // console.log(item);   
});

//Using Arrow Func with using name ----> ()=>{}
coding.forEach((item) => {
    // console.log(item);   
});


// function printME(item) {
//     console.log(item);
// }
// coding.forEach(printME)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);

// })


//OBJECTS IN AN ARRAY
const myCoding = [
    {
        name: "js",
        age: 10
    },
    {
        name: "java",
        age: 20
    },
    {
        name: "python",
        age: 40
    },
]

myCoding.forEach((item)=>{
    console.log(item);
    // console.log(item.name, item.age);
})




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

