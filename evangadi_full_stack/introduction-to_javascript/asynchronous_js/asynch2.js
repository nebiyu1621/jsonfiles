



console.log(fetch("https://randomuser.me/api/")
    .then((response) => response.json()).then((data) => data.results[0]));


async function logdata() {

    try {

        const response = await fetch("https://randomuser.me/api/")
        console.log(response);

        const data = await response.json()
        console.log(data);

        const user = await data.results[0]
        console.log(user);

    } catch (error) {
        alert('error has occured')
        console.log(error);


    }




}


// this is a callback function that calls function inside another function


function orderPizza(callback) {



    setTimeout(() => {


        const pizza = "🍕"

        console.log(`your ${pizza} is ready`);

        callback(pizza)
    }, 2000);


}

function pizzaReady(pizza) {

    console.log(`your ${pizza} is eaten`);




}

orderPizza(pizzaReady)


console.log("call a friend");



// fetch api is used to request data from http request to a server and come with a respond data

fetch("https://randomuser.me/api")
    .then((res) => res.json()) // cathches the objects in js returns its values 
    .then((data) => console.log(data.results[0])) // selects the first index form the json files
    .catch((err) => console.log("there was some error", err));

let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {

        reject(10)

    }, 3000)

})

// example create own promise API 

function alarm(person, delay) {


    return new promise((resolve, reject) => {
        if (delay < 0) {
            reject("Alarm delay can not be negative")
        }
        setTimeout(() => {

            resolve(`Wake up, ${person}!`)

        }, delay)

    })



}


alarm("bob", 2000)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))


// write asynf function with getup name
// try data wait alarm(person name, 2000)
// catch error 
// execute the code

async function getup() {

    try {

        const data = await alarm("bob", 2000)

    } catch (error) {

        console.log("there is sth wrong");

    }

}

getup()
// this will  execute the code in the code 



// in the code i provided there are two ways of using using promise these are :-
// 1, by using the new method to create the new promise and assigning its arguments 



