// console.log("Abebe");    
// console.log("Kebede");   
// setTimeout(() => {
//   console.log("Almaz");
// }, 2000);
// console.log("Challa");

// // Callbacks
// // A function to display the given argument
// function resultDisplay1(x) {
//   console.log(x);
// }
// resultDisplay1(44);

// // Using callback to pass function as an argument
// // In this example, we are calling the callback function, which is resultDisplay, after the adder function finishes adding
// function adder1(a, b, callback) {
//   var sum = a + b;
//   callback(sum);
// }
// console.log("Test 1");
// adder1(10, 8, resultDisplay1);
// console.log("Test 2");

// // setTimeOut Example
// function helloAbebe() {
//   console.log("Selam Abebe");
// }
// helloAbebe();
// setTimeout(helloAbebe, 1000);

// function hello(x) {
//   console.log("Selam " + x);
// }
// setTimeout(hello, 2000, "Kebede");

// // Asynchronous JS using setTimeout
// // Lets use the same example we used above but Asynchronously this time
// function resultDisplay2() {
//   console.log("Abebe beso bela");
// }
// console.log("Test 1");
// // resultDisplay2();
// setTimeout(resultDisplay2, 5000);
// console.log("Test 2");
// console.log("Test 3");

// Promises
// let promise = new Promise(function (resolve, reject) {
//   // You write your executor code in here
// });

// console.log(promise);

// // Calling resolve
// let promise = new Promise(function (resolve, reject) {
//   if (true) {
//     resolve("Abebe");
//   }
// });
// console.log(promise);

// // Calling reject
// let promise = new Promise(function (resolve, reject) {
//   if (1 == 2) {
//     resolve("Abebe");
//   } else {
//     reject("Kebede");
//   }
// });

// console.log(promise);

// Don't worry about the uncaught error at this point
// console.log(promise);

// // Calling both at the same time
// // Calling reject
// let promise = new Promise(function (resolve, reject) {
//   resolve("Abebe");
//   // setTimeout(() => resolve("Abebe"), 2000);
//   reject("Kebede"); // This one is ignored
// });
// // Don't worry about the uncaught error at this point
// console.log(promise);

// // then()
// let promise = new Promise(function (resolve, reject) {
//   resolve("Abebe");
//   // setTimeout(() => resolve("Abebe"), 2000);
//   // reject("Kebede");
// });

// promise.then(
//   function (result) {
//     console.log("Resolved result is: " + result);
//   },
//   function (error) {
//     // This one doesn't run as the Promise is resolved
//     // Handling of an error like this is called catching
//     console.log("Rejected error is: " + error);
//   }
// );

// console.log(promise);

// // catch()
// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(() => resolve("Abebe"), 2000);
//   reject("Kebede");
// });

// promise.catch(handleError);

// function handleError(error) {
//   console.log(error);
// }

// // One last example (Found on https://www.digitalocean.com/)
// var isMomHappy = true;

// // Promise
// var willIGetNewPhone = new Promise(function (resolve, reject) {
//   if (isMomHappy) {
//     var phone = {
//       brand: "Samsung",
//       color: "black",
//     };
//     resolve(phone); // fulfilled
//   } else {
//     var reason = new Error("mom is not happy");
//     reject(reason); // reject
//   }
// });

// // call our promise
// var askMom = function () {
//   willIGetNewPhone
//     .then(function (fulfilled) {
//       // yay, you got a new phone
//       console.log(fulfilled);
//       // output: { brand: 'Samsung', color: 'black' }
//     })
//     .catch(function (error) {
//       // oops, mom didn't buy it
//       console.log(error.message);
//       // output: 'mom is not happy'
//     });
// };

// console.log(willIGetNewPhone);
// askMom();

// // Async Await
// // Async
// async function someFunction() {
//   return "Abebe";
// }
// let a = someFunction();
// // console.log(a);

// someFunction().then(console.log);

// // Await
// // Let's first implement it without using async await
// function anotherFunWithoutAwait() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Abebe still eating Beso :) "), 1000);
//   });

//   promise.then(console.log);
// }

// anotherFunWithoutAwait();

// // With Async Await
// async function anotherFun() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(
//       () =>
//         resolve(
//           "Abebe finally finished eating Beso after 4 months ;) CONGRATULATIONS to ABE and ALL of you class of Dec 19th batch students!!"
//         ),
//       5000
//     );
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// anotherFun();


// console.log("hi");
// console.log("start");
// var neba = 
//     setTimeout(() => {

//         console.log("start");


//     }, 1000);

// this below methods are stacked on each other to work the second uses the first 
// so inorder for them to work there architure are stacked on each other refer the note
// const multiply = (a,b) => a * b;
// const square = (n) => multiply(n,n);
// const printSquare = (n) => console.log(square(n));

// printSquare(4)

// function delay(seconds) {

//     const start = Date.now()

//     let x = true
//     while (x) {
//         const current = Date.now()

//         if (current - start >= seconds * 1000) {
//             console.log("hi");
//             x = false

//         }

//     }

// }

// delay(5);
// console.log("now");



// to prevent from

async function dataDisplay() {
    try {
        let response = await fetch("https://randomuser.me/api/");
        console.log(response);

        let json = await response.json(); // Await the JSON response
        console.log(json);

        let user = json.results[0];
        console.log(user);

        // After accessing the user data objects, now try to display the data in the HTML using DOM manipulation
        const userHtml = document.querySelector("#user-container");
        console.log(userHtml);

        userHtml.innerHTML = `
            <img src="${user.picture.large}" alt="">
            <h3 class="name"> ${user.name.first} </h3>
            <h3 class="email">  ${user.email} </h3>
            <h3 class="location"> ${user.location.city} ${user.location.country} </h3>
        `;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


