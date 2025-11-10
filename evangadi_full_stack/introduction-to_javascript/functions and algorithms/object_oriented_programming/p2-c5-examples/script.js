// // Object declaration
// let exampleEmptyObject = {};
// let exampleArray = [1, 3, 4, 5, {}, {}];

// // person object
// let person = {
//   firstName: "Abebe",
//   lastName: "Kebede",
// };
// console.log(person);

// // console.log(exampleArray);

// console.log(exampleArray[1]);

// // Accessing properties
// console.log(person.lastName);
// console.log(person["lastName"]);

// // Change the property’s value
// person.firstName = "Almaz";
// console.log(person);

// console.log(exampleArray);
// exampleArray[1] = 90;
// console.log(exampleArray);

// // Add new property
// person.age = 50;
// console.log(person);

// // Adding a method to an object
// let person = {
//   firstName: "Abebe",
//   lastName: "Kebede",
//   someFunction: function () {
//     // Function definition goes here
//     console.log("Olla");
//   },
// };
// person.someFunction();

// // Using the "this" reference
// let person = {
//   firstName: "Abebe",
//   lastName: "Kebede",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.fullName());

// let fullName = person.fullName();
// console.log(person.fullName());

// // Creating an Object using a constructor
// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// let myClassMate = new Person("Abebe", "Kebede");
// let myOtherClassMate = new Person("Almaz", "Debebe");
// console.log(myClassMate);
// console.log(myOtherClassMate);

// // Methods in a constructor
// function Person(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }
// var myClassMate = new Person("Abebe", "Kebede");
// console.log(myClassMate);
// console.log(myClassMate.fullName());

// // The String Object
// // charAt()
// let someString = "Abebe Beso Bela";
// console.log(someString.charAt(1).toUpperCase());

// // slice()
// let someString = "Abebe Beso Bela";
// console.log(someString.slice(4, 9));

// // toUpperCase()
// let someString = "Abebe Beso Bela";
// console.log(someString.toUpperCase());

// // The Array Object
// // push()
// let someArray = ["Abebe", "Kebede", "Almaz"];
// console.log(someArray);
// someArray.push("Chaltu");
// console.log(someArray);

// // pop()
// let someArray = ["Abebe", "Kebede", "Almaz"];
// console.log(someArray);
// someArray.pop();
// console.log(someArray);

// // isArray()
// let someArray = ["Abebe", "Kebede", "Almaz"];
// let someString = "Abebe Beso Bela";
// console.log(Array.isArray(someArray));
// console.log(Array.isArray(someString));

// // filter()
// let someArray = [1, 2, 3, 5, 66, 77, 600, 888, 1000];
// // Filter out elements that are less than hundred
// // Step one is to write a function that determines if a number is less or greater than 100 and returns true or false based on the result
// // Then use that function inside the filter method

// function checkIfLessThan100(a) {
//   return a < 100;
// }
// let filteredArray = someArray.filter(checkIfLessThan100);
// console.log(filteredArray);

// // forEach()
// let someArray = [1, 2, 3, 5, 66, 77, 600, 888, 1000];
// // The first step is to write a function that is going to be applied on every element. Let's say we just want to multiply every element by 3 and log it on the console

// function multiplyByThree(a) {
//   console.log(a * 3);
// }
// someArray.forEach(multiplyByThree);

// // map()
// let someArray = [1, 2, 3, 5, 66, 77, 600, 888, 1000];
// // Again, the first step is to write a function that is going to be applied on every element. Let's say we just want to multiply every element by 3

// function multiplyByThree(a) {
//   return a * 3;
// }
// let newArray = someArray.map(multiplyByThree);
// console.log(newArray);

// // The Math Object
// // floor()
// let someNumber = 991.22;
// console.log(Math.floor(someNumber));

// // min()
// console.log(Math.min(3, 7, 8, 88));

// // pow()
// console.log(Math.pow(2, 3));
// console.log(Math.pow(27, 36));
