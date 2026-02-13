
// // window + . key access imoji = 😀

// // asynchronous javascript means when there are functions that take time to be excuted we use the method asynchronuos to process the data function and avoid collision with other function

// var x;

// console.log("hi");

// function greet(sec){

//     setTimeout(() => {

//         x = "hello"
//         console.log('hi from set timeout');
        
//     }, sec);
    
    
// }

// greet(0)

// console.log("selam nw");

// // note: call back function - used to call a function on another function while the first calling function is higher function call and second is the called function 
// function orderPizza(callback) {
//     console.log("order pizza");
//     setTimeout(() => {
//     const pizza = "🍕";
//     console.log(`Your ${pizza} is ready`);
//     callback(pizza);
//     }, 2000);
//     }
//     function pizzaReady(pizza) {
//     console.log(`Eat your ${pizza}`);
//     }
//     orderPizza(pizzaReady);
//     console.log("call a friend");



// function orderPizza(callback){
//     console.log("order pizza");
//     setTimeout(() => {
//         const pizza = "🍕"
//         console.log(`your pizza is ${pizza} is ready`);

//         callback(pizza)

//     }, 2000);
    
// }

// function pizzaReady(pizza){

//     console.log(`eat your pizza ${pizza}`);

//     orderPizza(pizzaReady)
//     console.log("call a friend");
    
    
    
    
    
// }


// promises - promise the codespace is initial scale 
// console.log(fetch("https://randomuser.me/api/"));

// then - after data arrived make the following code

// fetch("https://randomuser.me/api/").then(
//     (res) => res.json()
// ).then((data) => console.log(data));

// fetch("https://randomuser.me/api/")
// .then((res) => res.json())
// .then((data) => console.log(data.results[0]))
// .catch((err) => console.log("sth wrong >>", err))


// const myPromise = Promise.reject("sth went wrong")


// myPromise.catch((error) => {
//     console.log(error);
    
// })




// { id: 1, name: "John" }

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "John",
//           "last": "Smith"
//         }
//       }
//     ]
//   }


// .then((user) => {
//     console.log(user.name); // Logs "John"
//     return user.id; // Returns the value `1` to the next `.then()`
//   });



// aync/await - waits until the api feth is resolved and logs the data after that

// async function logData() {

//     try {

//         let response = await fetch("https://randomuser.me/api/")

//         let data = await response.json()
//         console.log(data);
        
//         const user = data.results[0]
//         console.log(user);
        

        
//     } catch (error) {
//         console.log("theres some error");
        
//     }
    
    
    
    
// }



// console.log("Start");

// function delay(seconds) {
// const start = Date.now();
// let x = true;
// while (x) { 
// const current = Date.now();
// if (current - start >= seconds * 1000) {
// console.log("hi");
// x = false;
// }
// }
// }
// delay(5); // Delays for 5 seconds

// console.log("Doing something completely unrelated to the
// timer above");






// async function logData() {

    
    
//     try{

//         const response = await fetch("https://randomuser.me/api/")
//         console.log(response);

//         const data = await response.json()
//         console.log(data);

//         const user = await data.results[0]
//         console.log(user);

//     }
//     catch (error){
//         alert("no response")
//         console.log(error);
        
//     }
    
    
// }

// try{

//     const response = await ("https://randomuser.me/api/")
    
//     const data = await  response.json()
    
//     const user = await data.results[0]

//     const email = await user.name.first


// }catch (error){

//     console.log(error);

//     alert("oops, sorry something went wrong")
    
    
// }


// function delay (seconds){

//     const start = Date.now()
//     let x = true

//     while(x){
//         const current = Date.now()
//         if(current - start >= seconds * 1000){
//             console.log("hi");

//             x = false
            
//         }

//     }
    
    
// }
// this will prevent the execution of the next code because it delay's it from executing for five seconds 

// console.log("where does my commnad go");



// promise constractor function


// - the promise constructor function lets us create a promise object 

// - takes single executor function as an argument 

// the executor function

// - takes two arguments, which are both also functions, and which are conventionally 
// called resolve and reject.

// resolve used for success

// reject used for falilure

// let nEwPromise = new Promise(function (resolve, reject){

//     resolve();
//     reject();
    
    
// })


// console.log(nEwPromise);


function alarm(person, delay){

    return new Promise((resolve, reject) => {
        if(delay < 0 ){
            reject("Alarm delay can not be negative")    
        }

        
        setTimeout(() => {

            resolve (`wake up , ${person}`)
        }, delay);
        
    })
    
    
    
// }

alarm("Abebe", 2000).then((data) => console.log(data)
).catch((err) => console.log(err)
)


async function getUp() {

    try{
        let data = await alarm("bob", 5000)
        console.log(data);
        
    }
    catch (error){

        alert(error)
        
    }
    
}

getUp()


async function displayData() {

    try{
        let response = await fetch("https://randomuser.me/api/")

        console.log(response);

        let data = await response.json()
        console.log(data);

        const user = data.results[0]
        console.log(user);
        
        // create the html element to display user data
        
        const userContainer = document.getElementById("user-container")
        userContainer.innerHTML = `
        
        <img src="${user.picture.large}" alt= "user Picture">
        <h3> name:  ${user.name.first} ${user.name.last}</h3>
        <h3> Email: ${user.email}</h3>
        <h3>Location: ${user.location.city}, ${user.location.country}</h3>
    
        `
        
    }
    catch(error){
        alert("sorry, come back later")
        console.log(error);
        
        
    }
    
}


// async function neba() {

//     let response = await fetch("https://randomuser.me/api/")
    
//     console.log(response);
    
//     let json = await response.json

//     console.log(json);

//     let user = results.[0]
    

    
    
    
    
// }



displayData()


pending - 


// let myPromise = new Promise(function(resolve, reject)) {
//     // resolve - parameter listens for the code that is needed to be resolved
//     // reject - triggered when reject algo is executed

//     // the below code should be under if condition for one of them to work

//     resolve() - // access this when it is accepted

//     reject() - // access this when it is rejected
    
    
// }

// var myPromise1 = new Promise ((resolve, reject) => {

//     const condition = true

//     if(condition){
//         resolve("working well")
//     } else{
//         reject("not working")
//     }
// })

console.log(myPromise1);


myFirstPromise1.then((data) => console.log("data >>>", data)
).catch((err) => console.log("Error >>>", err)
)


function alarm(person, delay){

    return new Promise((resolve, reject) => {
        if(delay < 0){
            reject('alarm delay can not be negative')
            
            
        }
        setTimeout(() => {

            resolve(`'wake up', ${person}`)
            
        }, delay);
        
        
        
    } )
    
    
}

alarm("abebe", 2000).then((data) => console.log(data)
).catch((err) => console.log(err))



async function getup(){

    
    try{
        let data = await alarm("bob", -5000)
        console.log(data);

    }catch (error){
        alert(error)
    }
    
    
}

getup()







async function displayData() {

    try{
        let response = await fetch("https://randomuser.me/api/")

        console.log(response);

        let data = await response.json()
        console.log(data);

        const user = data.results[0]
        console.log(user);
        
        // create the html element to display user data
        
        const userContainer = document.getElementById("user-container")
        userContainer.innerHTML = `
        
        <img src="${user.picture.large}" alt= "user Picture">
        <h3> name:  ${user.name.first} ${user.name.last}</h3>
        <h3> Email: ${user.email}</h3>
        <h3>Location: ${user.location.city}, ${user.location.country}</h3>
    
        `
        
    }
    catch(error){
        alert("sorry, come back later")
        console.log(error);
        
        
    }
    
}





async function dataDisplay() {

    
    try{

        let response = await fetch("https://randomuser.me/api/")

        console.log(response);

        let json = response.json()
        console.log(json);

        let user = json.results[0]

        console.log(user);
        
        // after accessing the user data objects now try to display the data in the html using dom manipulation


        const userHtml = document.querySelector("#user-container")
        console.log(userHtml);

        userHtml.innerHTML = `
        
        <img src="${user.picture.large}" alt="">
      <h3 class="name"> ${user.name.first} </h3>
      <h3 class="email">  ${user.email} </h3>
      <h3 class="location"> ${user.location.city} ${user.location.country} </h3>
        `
    }catch(error){

        alert("come back later")
        console.log(error);
        
        
        
    }
    
    
    
}
















}
