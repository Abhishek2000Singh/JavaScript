// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2===1);
// console.log(1===1);
// console.log(1==1);

//************COMPARISON BETWEEN DIFFERENT TYPE OF DATATYPE**************

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null>=0);
// console.log(null==0);


//=== not only check the value but also its datatypes
//=== is strict equality operator`

// console.log("2"===2); // returns false

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);
