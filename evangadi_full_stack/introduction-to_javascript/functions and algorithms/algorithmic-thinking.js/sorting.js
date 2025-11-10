









// write a function that can sort out an array assendingly without using a sort method.

// function sorting(a){

//     let numbers = a;



// }


// let ea = [12, 9, 33, 5, 89]

// let test = sorting(ea);

// console.log(test);











function sortNNumbers(num){
    console.log(num, "this is the original array");

    let j = true;
   while (j) {
      j = false
    for (let  i = 0;  i <num.length - 1; i++){

      if(num[i] > num[i + 1]){
        j = true
        let tmp = num[i]

        num[i] = num[i +  1]
        num[i + 1] = tmp;
      }

    }}

    return num;

}
console.log(sortNNumbers([3, 56, 89, 34, 20, 12]));
// function sortNumbers(num) {
//     console.log(num, "orignal Input Array");
//     let j = true;
//     while (j) {
//         console.log("enters while loop conditions - because J's value in the () is", j)
//         j = false
//         console.log("to  stop the while loop we change J's value immediatly to", j, "since the while loop has already started");
//         for (let i = 0; i < num.length - 1; i++) {
//             console.log("current array order ===>", num);
//             console.log("for loop number - ", i + 1);
//             console.log("compares", num[i], "and", num[i + 1]);
//             if (num[i] > num[i + 1]) {
//                 j = true
//                 console.log("enters the if condition because", num[i], ">", num[i + 1]
 
//                 );

//                 console.log("since it entered the if condition we want to change J's value ", j, "so it will enter the while loop again, once it finishes the");

//                 let tmp = num[i]

//                 console.log(num, "array after storing", num[i], "on temp variable ");

//                 num[i] = num[i + 1]
//                 console.log(num, "array, after changing array index", i, "by", num[i + 1]);
//                 num[i + 1] = tmp;
//                 console.log(
//                     num, "array, after changing array index", i + 1, "by", tmp
//                 );


//             }

//         }

//     }

//     return num;

// }






// console.log(sortNumbers([1, 40, 16 ]))



// function sorting(num){
   
//     let k = true; 

//     while (j){

//         k = false;
//         for(let i = 0; i < num.length - 1 ; i++ ){

//             if(num[i] > num[i + 1] ){
//                 k = true;
//                 let tmp 
                
//             }
            
//         }
//     }
    
    

// }




function sorted(num){

    let j = true;

    while (j){
        j = false
        for(i = 0; i < num.length -1  ; i++){
 
            if(num[i]  > num[i + 1]){
                j = true
                
               let tmp = num[i]
                num[i] = num[i + 1]
                num[i + 1] = tmp

            }
            
        }
        
    }
    return num;
}




function sort(num){

    let h= true
    while(h){
        h= false
        for(i = 0; i < num.length - 1 ; i++){

            h = true
            
            let tmp = num[i]
            
            num[i] = num[i + 1]
            num[i + 1] =  tmp
            
        }
        
    }
    return num;
}







function sorting (num){

    let j = true;
    while(j){

        j = false

         for(i = 0; i < num.length - 1 ; i++ ){

            j =true;
            
            let temp = num[i]            

            num[i] = num[i + 1]
            num[i + 1] = temp
         }     

    }

    return true
    
}



 
