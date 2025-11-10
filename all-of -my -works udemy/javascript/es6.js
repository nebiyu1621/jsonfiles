// rest operator - will collect values to an array
// // note : rest operator should be the last parameter.

// const msum = (num1, num2, ...args) => {
//   let sum = num1 + num2;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// };
// msum(1, 2, 3, 4, 5, 6, 7);

// // spread operator--  used to expand an array into single list elements.
// // const arr1 = [1,2,3];
// // const arr2 = [4,5,6];

// // const arr = [...arr1, arr2]

// // console.log(arr) // [1,2,3,4,5,6]

// // using object
// // let mObj1 = {
// //     name:'john',
// //     lastName:'Lark'
// // }

// // let mObj2 = {

// //     age:28
// // }

// // let mObj3 = {...mObj1, ...mObj2}

// // console.log(mObj3);

// // let firstname = 'john';

// // let lastname = 'doe';

// // let age = 25;

// let obj = {
//   firstname: firstname,
//   lastname: lastname,
//   age: age,
//   // output: john, doe, 25
// };

// let { lastname, firstname } = obj;

// console.log(firstname);
// console.log(lastname);

// // .map() & push() array function
// // const arr1 = [1,2,3,4,5]

// // let arr = []

// // doublevalues

// // let doublevalues = (item) => {

// //     item *2

// // }

// // for(let i = 0; i < arr1.length ; i++){

// //     arr.push(doublevalues(arr1[i]))

// // }

// // map() = will make the developement faster .
// /* .map() does loop, but it’s more than just a loop.

// It’s an array method that:

// Loops through every element of an array, ✅

// Transforms each element (using a function you give it), ✅

// Returns a new array with the transformed results. ✅ */

// const arr1 = [1, 2, 3, 4, 5];

// let newArr = arr1.map((item, i) => {
//   console.log(`item at pos: ${i} is ${item}`);
//   return item * 2;
// });

// // filter const

// const words = ["ca", "house", "tree", "hi", "by", "n"];

// const filtered = words.filter((word) => word.length < 3);
// console.log(filtered);

// // find() & findindex()

// // Returns the first element in an array that satisfies a condition.

// const numbers = [1, 2, 3, 4, 5];

// const firstEven = numbers.find((even) => even % 2 == 0);

// console.log(firstEven); // 2 returns undefined if no result found based on condition

// // findindex()

// const firstEvenIndex = numbers.findIndex((index) => index % 2 == 0);

// console.log(firstEvenIndex); // 1 = where holds 2 value  returns -1 if no index

// // Classes in Es6//////////////////////////
// /*
// syntax:
// class ClassName{

// constructor(){

//     // initializes the properties here.
// }

// // Methods outside constructor 

// methods1 = () => {
    
//     // Method body
//     }

// }
// //// classes are just syntax sugar :- meaning they are just used to make 'sweeter' or more human-friendly code that works same as older code synataxes.
// */

// function person(name, yearofbirth) {
//   this.name = name;
//   this.yearofbirth = yearofbirth;

//   this.getDetails = function () {
//     return "name" + this.name + "and age: " + (2024 - this.yearofbirth);
//   };
// }

// var john = new person("john", 2019);

// console.log(john.getDetails());

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this);
//   },
// };



// ////// classes in javascript/////////

class Product {
  // constructor function
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  // method

  brandName() {
    console.log(`your brand name is :  ${this.brand}`);
  }

  Getage(currentYear) {
    return currentYear - this.year;
  }
}

class pilot extends Product {
  constructor(exp, type, licenseNum) {
    super(brand, year);


    this.exp = exp;
    this.type = type;
    this.licenseNum = licenseNum;
  }

  getData = () => {
    console.log(
      `your a pilot with type: ${this.type} and with experience of ${this.exp} also you have this license number: ${this.licenseNum} with your brand car ${this.brandName()} `
    );
  };
}

const myCar = new Product("Tesla", 2030);

console.log(myCar.brandName);
console.log(myCar.Getage(2025));




// // working with promises.///////////

const promise = new Promise((resolve, reject) => {

$.get("https://jsonplaceholder.typicode.com/comments", (data) => {

  resolve(data);
  
}).fail(err => {
 reject(new Error(`its an error ${err.status} `)) 
})
 
})
// calling the resolved and error  .
promise
.then(data => console.log("data recieved", data))
.catch(error => console.error(error.message));













const promise1 = new Promise((resolve, reject) => {

$.get("https://jsonplaceholder.typicode.com/comments", (data) => {

  resolve(data)
}).fail(error => {

  reject(new Error(`this is the error ${}`))
  
})

}  )
