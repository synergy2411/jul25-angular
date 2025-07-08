// Implicit Typing / Type Coersion
// let isAdmin = true;

// // isAdmin = "Hello";

// let user = {
//   name: "John Doe",
//   age: 32,
// };

// // user.email

// let greeting = "Hello";

// // greeting = 210;

// greeting = "Hola";

// // Explicit Typing
// let username: string;

// username = "John Doe";

// // username = 199;

// console.log("Username : ", username);

// // Custom Type
// type MyCustomType = string | number;

// let age: MyCustomType;

// age = "Twenty Three";

// age = 23;

// type MyUserType = {
//   firstName: string;
//   lastName: string;
//   age?: number;
// };

// let userOne: MyUserType = {
//   firstName: "Monica",
//   lastName: "Geller",
// };

// interface ResourceType {
//   resourceName: string;
//   numberOfResources: number;
// }

// let resourceOne: ResourceType = {
//   resourceName: "Server 1",
//   numberOfResources: 3,
//   // location: "Pune",
// };

// console.log(resourceOne);

// class Foo {}

// let foo: Foo;

// Types in TypeScript

// let varAny: any;

// varAny = "Hello";

// varAny = 100;

// varAny = true;

// let varString: string;
// varString = "Hello World!";
// // varString = 109;

// let varBoolean: boolean;

// varBoolean = true;

// let varNumber: number;

// varNumber = 201;

// // let varStringArray: Array<string>;
// let varStringArray: string[];
// varStringArray = ["Monica", "Rachel", "Ross"];

// let varTuple: [boolean, string[]];
// varTuple = [true, ["Monica", "Joey"]];

// let varUnion: string | null;
// varUnion = null;
// varUnion = "Say something";

// let varUnknown: unknown;
// varUnknown = "Hello";

// if (typeof varUnknown === "string") {
//   varUnknown.toLowerCase();
// }

// varUnknown = 201;
// varUnknown = true;

// function alwaysThrowError(err: string): never {
//   throw new Error(err);
// }

// let varDate: Date;
// varDate = new Date(Date.now());

// // let demoFunction: Function;
// let demoFunction: () => string;
// demoFunction = () => {
//   return "Hello";
// };

// let varSymbolOne: Symbol;
// let varSymbolTwo: Symbol;

// varSymbolOne = Symbol(10);
// varSymbolTwo = Symbol(10);

// console.log(varSymbolOne === varSymbolTwo);

// function demoOne(): never {
//   console.log("returning void");
//   throw new Error("the error");
// }

// // console.log(demoOne());

// let varNull: null | string = null;

// varNull = null;

// let varSome!: null | string;

// Template Strings- back tick (``) || ''
// - Embed the variables within string without (+)
// - Multi-line string without carriage return (\n)

// let username = "Monica Geller";
// let userAge = 23;

// let greetingString = `Hello from ${username}!

// I am ${userAge} years old.`;

// console.log(greetingString);

// Default Parameter

// function demoDefaultParameter(arr: Array<number> = []) {
//   if (arr.length > 2) {
//     console.log("Running the Ops");
//   } else {
//     console.log("No value");
//   }
// }

// demoDefaultParameter([1, 2, 3, 4]);

// Class

// class Student {
// private name: string;
// private id: string;
// private age: number;

// constructor(name: string, id: string, age: number) {
//   this.name = name;
//   this.id = id;
//   this.age = age;
// }

//   constructor(
//     private name: string,
//     private id: string,
//     private age: number) { }

//   getDetails(): string {
//     return `
//     Student Id : ${this.id}
//     Student Name : ${this.name}
//     Student Age : ${this.age}
//     `;
//   }
// }

// let monica = new Student("Monica", "S001", 23);
// console.log(monica.getDetails());

// class Person {
//   private name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   getDetails() {
//     return this.name;
//   }
// }

// class Employee extends Person {
//   private empId: string;

//   constructor(name: string, empId: string) {
//     super(name);
//     this.empId = empId;
//   }

//   getDetails() {
//     return `
//       Employee Name : ${super.getDetails()}
//       Employee Id : ${this.empId}
//     `;
//   }
// }

// let john = new Employee("John Doe", "E001");
// console.log(john.getDetails());

// Method Overloading
// function add(n1: string, n2: string): string;
// function add(n1: number, n2: number): number;
// function add(n1: any, n2: any): any {
//   if (typeof n1 === "string" && typeof n2 === "string") {
//     return "Concatenated Result : " + n1 + n2;
//   }

//   if (typeof n1 === "number" && typeof n2 === "number") {
//     return "The Sum is : " + (n1 + n2);
//   }
// }

// console.log(add("Hello ", "World"));

// console.log(add(12, 13));

// GENERICS
// function addAtBeginning(item: string, items: string[]): string[] {
//   return [item, ...items];
// }

// console.log(addAtBeginning("Monica", ["Joey", "Ross", "Rachel"]));

// function addAtBeginning(item: number, items: number[]): number[] {
//   return [item, ...items];
// }

// console.log(addAtBeginning(101, [102, 103, 104, 105]));

function addAtBeginning<T>(item: T, items: T[]): T[] {
  return [item, ...items];
}

const strArray = addAtBeginning<string>("Joey", ["Monica", "Ross", "Rachel"]);

const numberArray = addAtBeginning<number>(101, [102, 103, 104, 105]);
