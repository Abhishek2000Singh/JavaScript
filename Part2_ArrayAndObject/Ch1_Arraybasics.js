const myArr = [0, 1, 2, 3, 4]
// console.log(myArr);
// console.log(myArr[1]);

// const myHeros = ["saktiman", "harsh"]
// console.log(myHeros);

const arr = new Array(1, 2, 3, 4)
// console.log(arr[1]);

//Array Methods

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(9)); //doesnt exist

// const newArr = myArr.join()

// console.log(arr);
// console.log(newArr); //converted to string
// console.log(typeof newArr);


//slice & splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //doesnt affect the original array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //manipulates original array
console.log("C ", myArr);
console.log(myn2);





