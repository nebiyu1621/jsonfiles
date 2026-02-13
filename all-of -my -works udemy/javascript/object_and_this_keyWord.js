

// var fistName = "abi"

// var object = {

//     firstName: "neba",
//     dave: "dave",
//     yearOfBirth: 1999,
//     job: "developer",
//     function: function(){
//        var thiss =  this.firstName
//         console.log(thiss);
        
        
//     },
//     parents: {
//         firstName: "ryan",
//         dave: "ben",
//         yearOfBirth: 1999,
//         job: "consultant",
//         function: function(){
//             var thiss =  this.firstName
//              console.log(thiss);
//          }
//     }
//     // `function: function(){
//     //    var thiss =  firstName // it refers to the outside of the object which is "abi"
//     //     console.log(thiss);
//     //     console.log(this.firstName);
//         // `
    
// }


// // the this keyword is used to refer to the object that is currently being used. in this case the object is object and the this keyword is used to refer to the object object
// // but if we cancel this it will refer outside the object and catch "abi"



// // constructor function = a function that is used to create objects with the same properties and methods. it is used to create multiple objects with the same properties and methods

// var person = {
//     name: "abi",	
//     yearOfBirth: 1999,
//     job: "developer",

// }

// // constructor function

// function Person(name, yearOfBirth, job){
//     name = this.name
//     yearOfBirth = this.yearOfBirth
//     job = this.job
// }


// var johnny = new Person("jhon", 1999, "developer")

// console.log(johnny);



// // prototype inheritence - is used to inherit some part of object or function inside protype method and it will be used as the object it self .

// function Person(pName, pYearOfBirth, pJob){

//     this.name = pName;
//     this.yearOfBirth = pYearOfBirth
//     this.job = pJob

    
    
    
// }


// person.prototype.calculateAge = function(){

//     console.log(2019 - this.yearOfBirth);
    
    
// }


// var jhon = new Person('John', 1992, 'Pilot')

// john.calculateAge()

// var claire = new Person('Clarie', 1994 , 'Doctore')

// claire.calculateAge()


// // json 

// var mObj = {

//     "name": 'jhon',
//     "age": 28,
//     score:[22, 25, 24, 21, 20]
    
    
// }

// var strJson = JSON.stringify(mObj)

// console.log(strJson);// it will convert the object to string in the cosole log its a string
// console.log(JSON.parse(strJson)); // it will convert the string to object in the console log its an object


// what is Ajax = is a short term for Asynchronous JavaScript and XML. it is used to send and receive data from a server without having to refresh the page. it is used to update the page without having to refresh the page

// Asynchrounus = is a way of processing a code with out waiting for the next code to process. if the previous code is taking time to process the next code will process without waiting for the previous code to finish processing if it takes time.

// function getToDoListFromBackend(){

//    var http = new XMLHttpRequest(); // this line of code is used to create a new object of XMLHttpRequest
//    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true) // this line of code is used to get the data from the server. to the xmlhttprequest object. the first parameter is the method of the request. the second parameter is the url of the request. the third parameter is the boolean value which is true or false. if it is true it means the request is asynchronous. if it is false it means the request is synchronous.

   
//    http.onload = function() {
//         if (http.status === 200) { // Check if request was successful
//             var todos = JSON.parse(http.responseText); // Parse JSON response
//             console.log(todos); // Log the list of to-dos
//         } else {
//             console.error('Error fetching data:', http.status);
//         }
//     };

//     http.onerror = function() {
//         console.error('Network error');
//     };
    
    
//    http.send() // this line of code is used to send the data to the server.
   
// }

// getToDoListFromBackend() // this line of code is used to call the function getToDoListFromBackend() to get the data from the server.



// handling http response

// function getToDoListFromBackend(){

    
//     var http = new XMLHttpRequest();

//     http.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             console.log(JSON.parse(http.responseText))
//         }else{
//             console.log('error fetching data:', "Call Failed");
            
//         }
//     }
//     http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//     http.send();
// }

// getToDoListFromBackend();









// function getToDoListFromBackend(){

//     var https = new XMLHttpRequest()

//     https.onreadystatechange = function(){

//         if(this.readyState === 4 `done`){
//             if(this.status === 200 `sucess` ){
//                 console.log(JSON.parse(https.responseText));
//             }else{
//                 console.log('error fetching data:', "Call Failed");
//             }
//         }
//     }
//     https.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)	
    
//     https.send()
    
// }

// getToDoListFromBackend()




// function getToDoListFromBackend(){

//     var http = new XMLHttpRequest()

//     var onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             var response = JSON.parse(http.responseText);
//             // console.log(JSON.parse(http.responseText));
//             for(var i = 0 ; i < response.length; i++){
//                 console.log(response[i].id, response[i].title);
                
//             }
            
            
//         }else{
//             console.log("call failed");
            
//         }
//     }
    
    
//     http.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
//     http.send()
// }


// getToDoListFromBackend()



// working with https request data 





function createTODOItemAtBackend(){
    var http = new XMLHttpRequest()


http.onreadystatechange = function(){

    if(this.readyState === 4 && this.status === 201){
       var response = JSON.parse(this.responseText)
        list.appendChild(createTODODynamically(response.id, currentvalue))
        console.log('Add item to the list');
        

    }else{
        console.log("call failed");
        
    }
    
    http.open( "POST", "https://jsonplaceholder.typicode.com/todos", true)


    http.send()
}
    
    // Assuming you have some data to send in the request body


var data = JSON.stringify({
    title: "New TODO Item",
    completed: false
});

http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
http.send(data);


}


$("li").append("<li>new item</li>")

$("ul").css("color", "red")


$('#todo-list').css({

    'color': 'red',
    'font-size': '20px',
})


// handling function and event listener

$('#add-todo').on('click', function(){
    console.log('Button clicked');
    

}
)



// with jquery we can set multiple events at once


var inputBox = $('#todo-input')

inputBox.on({
    'input':function(e){
        console.log('Input changed');
        
    },
    'focus': function(e){
        console.log('Input focused');
        
    },
    'blur': function(e){
        console.log('Input blurred');
        
    }
})

function getToDoListFromBackend(){
    $.post('https://jsonplaceholder.typicode.com/todos', obj,function(data, status){	

        var response = data;

        list.append(createTODODynamically(response.id, currentvalue));

        todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;

        clearInputData();
  
})

}





