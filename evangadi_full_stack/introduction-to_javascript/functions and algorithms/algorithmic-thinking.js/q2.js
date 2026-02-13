

// function nerve(arr1, arr2){

//     if(!(Array.isArray(arr1) && Array.isArray(arr2))){
//         return "both are not arrays"
//     }
    
//     let firstArray = arr1.sort((a, b) => a - b)
//     console.log(firstArray);

//     let secondArray = arr2.sort((a, b) => a - b)
//     console.log(secondArray);
    
//     let min1 = firstArray[0];
//     console.log(min1);

//     let min2 = secondArray[0];
//     console.log(min2);

//     let max1 = firstArray[arr1.length - 1]
//     console.log(max1);

//     let max2 = secondArray[arr2.length - 1]
//     console.log(max2);
    
        
//     if(min1 > min2 && max1 < max2){
//         return true
//     } else {
//         return false
//     }

    
// }

// console.log(nerve([3, 4, 5, 56, 56, 87], [4, 5, 67, 89,] ));




// // another way of doing it for question 2 is by using math.min and max and spread operator (...)  

// function math(arr1, arr2){

//     if(!(Array.isArray(arr1)  && Array.isArray(arr2) )){
//         return "both side are not arrays "
//     }
    
    
//     let min1 = Math.min(...arr1)
//     console.log(min1);
//     let min2 = Math.min(...arr2)
//     console.log(min2);
      
//     // now for max value 
//     let max1 = Math.max(...arr1)
//         console.log(max1);

//     let max2 = Math.max(...arr2)
//     console.log(max2);

//     if(min1 > min2 && max1 < max2){
//         return true
//     } else {
//         return false
//     }

// }




// console.log(math([3, 4, 5, 56, 56, 87], [4, 5, 67, 89,] ));






// function sort(arr1, arr2){
    

//     if(!(Array.isarray(arr1) &&  Array.isArray(arr2))){
//        return  'both inputs need to be arrays '
//     }

//     let firstArray = arr1.sort((a,b) => a - b)
//     let secondArray = arr2.sort((a, b) => a - b)

//     let min1 = firstArray[0]
//     let min2 = secondArray[0]

//     let max1 = firstArray[arr1.length - 1]
//     let max2 = firstArray[arr2,length - 1]

//     if(min1 > min2 && max1 < max2  ){{

//           return true

//     }} else {
//         return false
//     }
// }


// question 3 - magic array check if the array you provided has prime numbers and if so add all the primes and compare if the result is equal with the first value of the array and if true return 1 and if false return 0 
// ex. [10, 5, 5, 2, 4, 6]
// in this array the only primes are 5 and 5 and there sum is 10 so, they are equal with the first[0] value of the array so the function should be able to check if the provided input is array or not, find the primes in the array, sum the primes and check if they are equal with the first value and return 1 if correct and return 0  if not correct    
// psuedo code
// declare a varaible that you will be using to sum up the primes and give it a value of zero.

// check if prime or not.

// sum up the numbers you filtered.

// check if the numbers are equal with the first value.

// if equal return 1 else 0.


// function isMagicArray(num){
    
//       if (num < 2 ){
//         return false
//       }    
//     else{
//         for(let i = 2; i <= Math.sqrt(num); i++ ){
//             if (num % i == 0){
//                 return false;
//             }
//         }
//         return true;
//     }
    
     
// }



// function isprime(arr){

//  let sumOfPrime = 0
    
//   for (let i = 0; i < arr.length; i++){
//     if (isMagicArray(arr(i))){
//         console.log(arr[i], "is a prime number, so add it to the sum" )
//         sumOfPrime = sumOfPrime + arr[i]
//     }
      
    
//     if (sumOfPrime > arr[0]){
//         return 0;
//     }
    
//   }
 
//    if (sumOfPrime === arr[0]){

//     return 1;
//    } else {
//     return 0;
//    }
    
    
// }










function prime(num){
    //  this function is used to calculate if the provided number s prime or not
    if(num < 2){
        return false;
    }else{

    for(i = 2; i<= Math.sqrt(num) ; i++ ){

        if(num % i == 0 ){
            return false;
        }

    }
    return true;

}
    
    
}

console.log(prime(7));
console.log(prime(23));
console.log(prime(15));



function isMagicArray(arr){

    let sum = 0

    for(let i  = 0; i > arr.length ; i++){

        if(prime(arr(i))){
            console.log("its a prime number so add it to sum");

            sum = sum + arr[i]
        }
        if(sum > arr[0]){

            return false
        }else{
            return true
        }
        
    }
}




function isprime(num){

   let  sum = 0

    if(num < 2){
        return false
    }else{

        for(i = 0; i< arr.length ; i++){
        //  now give the function from the previous to calculate if the given value is a prime or not.  
            if(prime(num(i))){

                sum = sum + num[i]
            }
            
        }
    //   if(sum > arr[0]){
    //     return false
    //   }
    }

    if(sum === arr[0]){
       
        return 1 ;
        
    }else{

       return 0;

    }
    
}






function calculatePrime(num) {

    if(num < 2)
    {
        return false
    }else
{
    for(i = 2; i < Math.length(num); i++){

        if(num % i == 0){ // == means by just value not type === means by both value ad type//

            return false;
        }

    }

    return true;
    }
    
    
}



function calculateMagicArray(arr){
   let sum = 0
    if(num < 2){

        return false;
    }

    for(i = 0; i < arr.length ; i++){

        if(prime(num(i))){

            sum = sum + num[i]
        }

        
        
        
        
    }
    if(sum === arr[0]){

        return 1
        
    }else {
        return 0
        
    }
    
}




function findPrime(num){

    if(num < 2){
        return false
    }else{

        for(i = 2; i< Math.sqrt(num) ; i++  ){

            if(num % 1 == 0){

                return false
            }
            
        }
        return true
    }
    

    
}




function findMagicArray(arr){


    sum = 0;
    
    if(sum < 2){

        return false;
    }
    
  for(i = 0; i < arr.length ; i++ ){

    if(findPrime(num(i))){
        
        sum = sum + num[i]
        
    }

    
    if (sum === arr[0] ){
        return 1;
    }else{
        return 0;
    }

    
  }
    
}









