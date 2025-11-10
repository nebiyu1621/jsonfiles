



// while(true){
//     executes
// }

// let i = 0;
 
// while(i <= 5){
//     console.log("the value of i is", i );
//     i++;
// }

// // while loop is just like if statement but it loops through the value infinitivly until you write an endig statement lastly.// 


// listName2 = ["almaz", "abeba", "kebede", "james", "Bob", "curry"]

// function listName(arr){
//     let x = true;
//     let i = 0;
 
//      while (x){
//         if( arr[i] === "Bob" ){
//         x = false
//         }  else{
//             console.log(arr[i]);
//         }   
//      }


// }


// algorithm question
// create a function that takes a number as an argument add up all the numbers from 1 until the number you passed to the function. for ex if you input 4 the number result should return 10 b/c (1 + 2 + 3 + 4) + 10


// 


function adds(a){
    if(a < 0){
        return 'provide positive number'
    } else if (isNaN(a)){
        return 'provide a number'
    }else
{    var result = 0
    for(i<1; i<= a;i++){
         result = result + i;
    }
}
}
var added = adds(8)


// using while loop

while(i<= num ){
    sum = sum + i;
    i++;
}
return sum;







var someNumbers = [7,58, 27];
var lengthOfArray = 3;
var loopNumber = 0;
var someMessage = " ";
var i;
for(i = 0; i < 3; i++){
    loopNumber = i + 1;
    someMessage = "loop" + loopNumber + ":" + someNumbers[i];
    console.log(someMessage);
}





// psudo code for the sum of a number provided
//  first declare a function  with number accepter pharam
// give the function a  variable with initial value zero.  
// write a for loop inside the function.
//  inside for loop start the initialization from one and give condition less than the variable and increase the varibale by one for each iteration
// then add the variable initailized  with the index in for for loop 
//  at last return the variable

function added(num){
     let sum = 0;
    for(i = 1; i <= num; i++){

        sum = sum + i;
    }
    return sum;
}

console.log(added(600));







