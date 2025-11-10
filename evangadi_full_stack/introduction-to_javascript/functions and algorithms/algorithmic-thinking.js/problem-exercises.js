


// practice edabit algorithm.
// problem - 1 calculate the win, drawand lose of football team//
// find the formula for traingle area

function area(base, height){
     if(isNaN(base) || isNaN(height) ){
        return'please provide a number '
     }
     else if (base <= 0 || height <=0){
        return 'please provide a positive number'
     } else{
        return base * height / 2;
     }
}

// write a function for a football team result.

// win gets 3 point per win           draw gets 1 point per lose and  lose gets 0 point per lose.

function result (a, b, c){
    let win = a * 3;
    let draw = b * 1;
    let loses = c * 0;
    let resultsum = win + draw + loses ;
    if (isNaN(a) || isNaN(b) || isNaN(c)){
        return 'provide a number'
    } else if (a <= 0 || b <= 0 || c <= 0 ){
        return 'no negatives '
    } else {
       return resultsum;
    }


}
let points = result(3, 5, 6);
console.log(points); 

//  - define a function that adds three arguments (a,b, c)
//  -check if all varaibles are numbers 
//  -check if no negative number is provided.
// - declare a varaible inside the function 
// -multiply the first value with 3
// - the next  with 1
// - the last with zero 
// - add all values together 
// - return the added result, 

// problem - 1 calculate the win, drawand lose of football team//




// problem -2 convert seconds to minute.

function minuteToSecond(a){
   var min = a * 60;  
   if (isNaN(a)){
      return 'provide numbers'
   }else if(a <= 0){
      return 'no negative'
   } else 
     return min;
   
}



// edabit problem 
/** 
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false)*/



function countTrue(arr) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] === true) { // Check if the element is true
           count++;
       }
   }
   return count;
}

// Example usage
console.log(countTrue([true, false, true, true])); // Output: 3

 

