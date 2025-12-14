//Create a const object and add a new key to it — does it work?
// const obj = {name: "Divya", age:23};
// obj.hobby="watching Cricket";
// console.log(obj); // { name: 'Divya', age: 23, hobby: 'watching Cricket' } because const prevents reassignment and redeclaration, not mutation
// //Try accessing a let variable before declaring it — what error do you see?
// // console.log(a); // ReferenceError: Cannot access 'a' before initialization
// // let a = 10;

// const array = [1,2,3,4,5];
// array.push(6);
// console.log(array); // [ 1, 2, 3, 4, 5, 6 ] because const prevents reassignment and redeclaration, not mutation
// console.log(null + 1);     // Output: 1 
// console.log("5" + 3);    // Output: 53 (string concatenation)   
// console.log("5" - 3);     // Output: 2 (string is converted to number)  
// console.log(true + false); // Output: 1 (true is 1, false is 0)
// console.log(undefined + 1); // Output: NaN (undefined is not a number)

// console.log(typeof []); //object
// console.log(typeof null); //object
// console.log(typeof 123n);  //bigint
