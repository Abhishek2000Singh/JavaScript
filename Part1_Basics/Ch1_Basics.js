const accountId = 14453
let accountEmail = "harsh@gmail.com"
var accountPassword = "harsh123"
accountCity = "Jaipur" //possible var declartion but should not be used
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// accountId = 2 //not allowed
accountEmail = "abhishe@gmail"
accountPassword= "123"
accountCity = "Kolkata"

// console.log(accountId); 
console.table([accountId, accountEmail, accountPassword, accountCity])

/* 
let and const are block scoped, var is function scoped
*/