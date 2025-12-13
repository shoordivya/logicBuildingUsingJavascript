//Create a const object and add a new key to it — does it work?
const obj = {name: "Divya", age:23};
obj.hobby="watching Cricket";
console.log(obj); // { name: 'Divya', age: 23, hobby: 'watching Cricket' } because const prevents reassignment and redeclaration, not mutation
//Try accessing a let variable before declaring it — what error do you see?
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;
