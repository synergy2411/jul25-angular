// console.log("Start");

// // Macro
// setTimeout(function () {
//   console.log("Timer");
// }, 10);

// // Micro
// Promise.resolve().then(function () {
//   console.log("Promise");
// });

// console.log("End");

// OUTPUT : Start -> End -> Timer (after 2 seconds)
// OUTPUT : Start -> End -> Timer -> Promise

// let x = "20";
// console.log(typeof x);

// let y = 10;

// let z = 30;

// let result = x - y;

// let add = y + z + x;

// console.log("ADD : ", add); //`

// console.log("RESULT : ", result); // 2010

// x = 101;
// console.log(typeof x);

// int[] arr = { 99, 98, 97, 96};

// // Declarative
// for (int i = 0; i < arr.length; i++) { }

// // Imperative
// for (Integer i: arr) { }

// // Reactive / Functional
// arr.stream().forEach(i -> )

// let addition = function sum(n1, n2) {
//   return n1 + n2;
// };

// console.log(addition(2, 4));

// function mystry() {
//   return function () {
//     return 7;
//   };
// }

// let x = mystry();

// console.log(typeof x); // function

// console.log(x()); // 7

// let arr = ["Hello", 32, true, function () {}, { name: "John Doe" }];

// let marks = [99, 98, 97];

// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);
// console.log(typeof arr);
// console.log(typeof marks);

// arr.push(201);

// console.log(arr);

let marks = [99, 98, 96, 80];

const fileteredResult = marks
  .filter(function (value) {
    return value > 97;
  })
  .map(function (value) {
    return "Score : " + value;
  });
console.log(fileteredResult); // [99,98]
