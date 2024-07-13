const regex = /very/g  //regular exp method -g stands for global
const text = "Harshit is very very Good boy and very nice very boy"
// console.log(text.replace('very', "VERY")); only one occurence will be changed
console.log(text.replace(regex, "VERY")); // all occurence will be changed
