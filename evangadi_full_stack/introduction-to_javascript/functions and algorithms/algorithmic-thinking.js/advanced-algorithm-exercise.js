
// advanced algorithm problems
// find a hidden word smallcase string from an uppercase strings. and print that string string on a alone

function hidden(givenString){
  console.log("orignal string", givenString);
       
     var hiddenWordContainer = "";
     for(let i = 0; i < givenString.length; i++){
        var singleLetter = givenString.charAt(i);
        // console.log("singleLetter", singleLetter);
        
         
        if(singleLetter === singleLetter.toLowerCase()){
            hiddenWordContainer = hiddenWordContainer + singleLetter
            console.log("our storage", hiddenWordContainer);
        }
        
     } 
   
     return hiddenWordContainer
}

console.log(hidden("BJBJBJhNJNJKiJFUR"));


function hidden(givenString){

    let givenArrays = givenString.split()

    let smallWord = givenArrays.filter(
        
        (singleLetter) => singleLetter != singleLetter.toUpperCase()


        
    )
    
    let collection = smallWord.join('')
    return collection
    

    
}

console.log(hidden('nHFKDHFJeKAJFJGHbFHFJFHa'));



function hiddenLetter(Letter){
var container = "";
// check for  each of the word starting from start to its end .
for(let i = 0; i < Letter.length; i++){
 
    var  singleLetter = Letter.charAt(i);
    
    // if you find a lower string add it to the container variable.
    if(singleLetter === singleLetter.toLowerCase()){
        container = container + singleLetter;
    }
     
}
    return hiddenLetter;
}


console.log(hiddenLetter("IUTUYUoHNGuHJGNr"));


// another way of doing it is by using  built in method.

function hiddenWord(givenString) {

    let stringArrays = givenString.split("");
    let smallLetters = stringArrays.filter(
    //    the array string is concatinated by string leteral
        (singleLetter) => singleLetter != singleLetter.toUpperCase() 
    )
    smallLetters = smallLetters.join("")  
    return smallLetters; 
 }
// function string(string){
//     let string = string + 100
// }

console.log(hiddenWord("ADSFREhFGGi"));


// retun nested array the array string is not destructuring.
  





function rere(given){

    let givenArrays = given.split("")
    let smallWord = givenArrays.filter(

        (singleWord) => singleWord != singleWord.toUpperCase() 
    )
    
    smallWord = smallWord.join("")
    return smallWord;

}



console.log(rere("yHGHoFHFHuDDHDaHFHFrJVJJFe"));









// write a function that defferentiates small letters from capital and that small letters will be joined as array and forma meaningful word.

// first declare a varaible that contains an empty container string in it  
// check every singel word starting from 0 to end by adding one from previous
// and print evey single word
// if the founded letter is lowercase when looping through concatinate/add it in the container and print it 




// by using built in function defferentiate small letters fom capital in an array and join them together to make meaning 

function neb(string){

    let splited = string.split("")
    let filtered = splited.filter()(
        (singleLettered) => singleLettered !=  singleLettered.toUpperCase()  
    )
    filteredToSmall = filtered.join("")
    return filteredToSmall;
}





// question 2

//  there are two arrays and return true if the min array of the first one is greater than the min element in the array of the second one if reverse return false and  if the max element in the array of the first one is less than the max array of the second one return true else false.  

// solution 
// check if the input is an array
// [2, 4, 5, 67, 68], [5, 3, 78, 60] sort the array in assending order then the first Element will be the min and the last one will be the max.

// after sorting make the program to recognize the first as min and the last as max
// start comparig the first one min with the second one min and if first is greater than the second return true and second max is greater than the first max true. 

function nerve(arr1, arr2){

    if(!(Array.isArray(arr1) && Array.isArray(arr2))){
        return "both are not arrays"
    }
    
    let firstArray = arr1.sort((a, b) => a - b)
    let secondArray = arr2.sort((a, b) => a - b)
    
    let min1 = firstArray[0];
    let min2 = secondArray[0];
    
    let max1 = firstArray[arr1.length - 1]
    let max2 = secondArray[arr2.length - 1]
    
        
    if(min1 > min2 && max1 < max2){
        return true
    } else {
        return false
    }

    
}






// another way of doing it for question 2 is by using math.min and max and spread operator (...)  

function math(arr1, arr2){

    if(!(Array.isArray(arr1)  && Array.isArray(arr2) )){
        return "both side are not arrays "
    }
    
    
    let min1 = Math.min(...arr1)
    let min2 = Math.min(...arr2)
    // now for the array second 
    let max1 = Math.max(...arr1)
    
    let max2 = Math.max(...arr2)

    if(min1 > min2 && max1 < max2){
        return true
    } else {
        return false
    }

}









// find hidden word lower from upper and lower cases

function hidden(givenString){

    console.log("letter", givenString);
    
    // write for loop that collects the every string and adds it to container
    var hiddenWordContainer = ""

    for (let i = 0; i < givenString.length; i++) {
        // add single letters to vat
        var singleLetter = givenString.charAt(i)
        console.log("single letters", singleLetter);
        
    }
    

    if (singleLetter === singleLetter.toLowerCase()) {

            hiddenWordContainer = hiddenWordContainer + singleLetter        
        
            console.log('storage', hiddenWordContainer);
            
    }
    
    return hiddenWordContainer
    
    
    
}


console.log(hidden("BJBJBJhNJNJKiJFUR"));













