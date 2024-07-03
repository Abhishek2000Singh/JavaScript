//for
let arr = [1, 2, 3, 4, 56, 7]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    let j = 10;
    // console.log(j + '*' + i + '=' + i * j);
}


// BREAK AND CONTINUE

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);      
        break; //come out of the main IF loop and continue the other series
        if (index==6) {
            console.log(`6 detected`);
            continue;
        }
    }
    console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);      
        continue; //come out of the main IF loop and continue the other series
        if (index==6) {
            console.log(`6 detected`);
            continue;
        }
    }
    console.log(`Value of i is ${index}`);
}