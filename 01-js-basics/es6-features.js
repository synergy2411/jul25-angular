// ARROW FUNCTIONS

// function add(n1, n2) {
//   return n1 + n2;
// }

// let sum = (n1, n2) => n1 + n2;

// console.log("Sum : ", sum(2, 4));

// let square = (value) => {
//   console.log("Value : ", value);
//   return value * value;
// };

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     return () => this.firstName + " " + this.lastName;
//     // let that = this;
//     // return function () {
//     //   return that.firstName + " " + that.lastName;
//     // };
//   },
// };

// let nestedFn = user.getFullName();

// console.log("Full Name : ", nestedFn());

// BLOCK SCOPE : restricts variable scope to the block itself
// - let
// - const

// function demoBlockScope(arr) {
//   // Variable Hositing
//   // var load = undefined;
//   // var flash = undefined;

//   if (arr.length > 2) {
//     let loading = "LOADING...";
//     console.log(flash); // error : not defined
//   } else {
//     let flash = "FLASHING...";
//   }
// }

// demoBlockScope([1, 2, 3, 4]);

// const username = "John Doe";
// username = "Mary Public";

// console.log(username);

// const user = {
//   // xoxx0x99x8
//   name: "John Doe",
// };

// user.name = "Jenny Public"; // xoxx0x99x8

// console.log(user.name); // ?

// user = {
//     name : "Monica"
// }

// const friends = ["Monica", "Joey", "Rachel", "Ross"];

// // Immutable Change
// friends.push("Chandler");

// console.log(friends); // ?

// // Mutable Change
// friends = [];

// REST OPERATOR (varArgs)
// - denoted by (...)
// - creates collection (Array)
// - last parameter

// function demoRestOp(theEmail, ...args) {
//   console.log(args[0]); // true
// }

// demoRestOp("test@test.com", true, 23);

// public int totalMarks(int... marks){
//     let total = 0;
//     for (Integer mark : marks) {
//         total + mark;
//     }
//     return total;
// }

// totalMarks(99, 98, 97, 95);
// totalMarks(99, 98, 97, 95, 80);
// totalMarks(99, 98, 94);

// SPREAD OP
// - expands the collection (Object / Array)

// let numbers = [3, 4, 5];

// let marks = [1, 2, numbers, 6, 7, 8];

// console.log(marks); // [1,2,[3,4,5],6,7,8]       // 3

// let userOne = {
//   name: "John",
//   company: "XYZ Inc",
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny",
//   id: "u001",
// };

// console.log(userTwo); // ?

// DESTRUCTURING : unpacking the collection; shallow copy

// let friends = ["Monica", "Ross", "Rachel", "Chandler", "Joey"];

// let [f1, , f3, f4, f5, f6] = friends;

// console.log(f4); //"Chandler"

// let user = {
//   firstname: "John",
//   lastName: "Doe",
//   age: 23,
//   address: {
//     street: "201, main road",
//     city: "Pune",
//   },
//   friends: ["Monica", "Joey"],
// };

// let {
//   firstname: fn,
//   lastName: ln,
//   age,
//   address,
//   friends: [friend1, friend2],
// } = user;

// // console.log(address); // {street, city}

// address.city = "Mumbai";

// console.log(user.address); // {city : "",street:""}

// let users = [
//   { email: "john@test", age: 23 },
//   { email: "monica@test", age: 24 },
//   { email: "ross@test", age: 25 },
// ];

// let [{ email: userOneEmail, age: userOneAge }, { email: e2, age: a2 }, {}] =
//   users;

// console.log(userOneAge, userOneEmail);

// CALLBACKS : function supplied to another function
// HIGHER ORDER FUNCTION: functions receiving the callback in parameter

// function greet(arr, cb) {
//   if (arr.length > 2) {
//     cb(null, "More than two values");
//   } else {
//     cb(new Error("Too few values"));
//   }
// }

// greet([1, 23], function (error, data) {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// Error First, Callback Last

// PROMISE

// Promise Builder Code
// function buildPromise(arr) {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (arr.length > 2) {
//         resolve({ message: "success" });
//       } else {
//         reject(new Error("Something went wrong!"));
//       }
//     }, 1500);
//   });

//   return promise;
// }

// Promise Consumer Code
// async function consumePromiseWithAsyncAndAwait() {
//   try {
//     const response = await buildPromise([1, 2]); // first API Call
//     console.log("ASYNC RESPONSE : ", response);
//     const responseTwo = await buildPromise([12, 3, 4, 5, 6]); // second API Call
//   } catch (err) {
//     console.error(err);
//   }
// }

// consumePromiseWithAsyncAndAwait();

// Promise Consumer Code - then().catch()
// function consumePromiseWithThenAnfCatch() {
//   buildPromise([1, 2, 3, 4])
//     .then((response) => {
//       console.log("First then() RESPONSE : ", response);
//       return response.message;
//     })
//     .then((message) => console.log("Second then() MESSAGE: ", message))
//     .catch((err) => console.error(err));
// }

// consumePromiseWithThenAnfCatch();

// fetch(url).then(result).then(fetch(secondUrl).then(result).catch()).catch()

// Promise API -
// - all : all or none
// - allSettled : will provide resaon for promise rejection
// - race : first settled promise result
// - any : first fulfilled promise result
// - resolve : immediately resolve the promise
// - reject : immediately reject the promise

// Promise.resolve("Test").then(console.log);
// Promise.reject(new Error("Bad thing")).catch(console.error);

function createPromise(data, mills) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, mills);
  });
}

const p1 = createPromise("First Promise", 2000);
const p2 = createPromise("Second Promise", 1000);
const p3 = createPromise("third Promise", 4000);
const p5 = Promise.reject(new Error("Something went wrong"));
const p4 = Promise.resolve("Fourth Promise");

// Promise.all([p1, p2, p3, p4, p5]).then((result) =>
//   console.log("RESULT : ", result)
// );
// Promise.allSettled([p1, p2, p3, p4, p5])
//   .then((result) => console.log("RESULT : ", result))
//   .catch(console.error);
// Promise.race([p1, p2, p3, p4, p5])
//   .then((result) => console.log("RESULT : ", result))
//   .catch(console.error);
Promise.any([p1, p2, p3, p5, p4])
  .then((result) => console.log("RESULT : ", result))
  .catch(console.error);
