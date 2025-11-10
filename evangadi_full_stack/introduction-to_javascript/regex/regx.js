

// search method searches for the expression and returns it
// var srt = "abebe beso bela"
// var n = srt.search(/Beso/i)
// var nn = new RegExp('ab+c', 'i')
// console.log(n);


// replace - returns new string in place of prevoius one method / pattern

// var str = "abebe beso bela"
// var m = str.replace("bela", "teta") 

// console.log(m);
// var str = "abebe beso bela"
// var m = str.replace(/b/g, "B") // global expression used to apply replacement for every word and letter

// console.log(m);


// string - match - matchs and returns the string matching the word or letter

// var str = "Abebe beso bela"
// var n = str.match(/bela/i)
// var m = str.match(/be/gi) // dont forget to apply global(g) pattern to search from the whole string other wise it will return just the first step

// console.log(n);
// console.log(m);

// the real methods of RegEx test() and exec(execute)


// test() - used to test if the expression is true or not
//  most commonly used in checking or testing if ex. phone_number expression works or not 
var phone_number = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

var testNumber = '+251994157730'
console.log(phone_number.test(testNumber));


// exec()

var neba = "abebe beso bela!"

var patt = /be/g; 
var result =  patt.exec(neba)

console.log(result);


// common symbols 
// .regex matches any character
// ^regex - finds regex that must match at the beginning of the line 
//  regex$ - must match at the end of the line var neba = /v$/, var bn = 
// [abc] - can match the letter a,b or c or ...
// [^abc] - matches characters out of (not including ) a,b and c

//  // pre difined meta characters 
//    \d
// Any digit, short for [0-9]

// \D
//   A non-digit, short for [^0-9]

// \s
//   A whitespace character, short for [ \t\n\x0b\r\f]
const regex = /\s/;
console.log("Hello World".match(regex));

// Quantifiers
// *
//   Occurs zero or more times, is short for {0,}

//   X* finds no or several letter x0b
//   .* finds any character sequence

// +
//   Occurs 
//    One or more times, is short for {1,}

//   X+ Finds one or several letter X

// ?
//   Occurs no or one times, ? is short for {0,1}.

//   X? finds no or exactly one letter X

// {X}
//   Occurs X number of times, {} describes the order of the preceding liberal

//   \d{3} searches for three digits, .{10} for any character sequence of length 10.

// {X,Y}

//   Occurs between X and Y times.
  
//   \d{1,4} means \d must occur at least once and at a maximum of four.

// Flags 
// Flags in RegEx are ways of providing further information on how to do the searching. 

// There are 6 RegEx flags in JavaScript. But the most common ones are these two  
//   i
//     With this flag the search is case-insensitive: 
//     no difference between A and a 
//   g
//     With this flag the search looks for all matches, without it â€“ only the first match is returned.

//   - The default is usually to do case sensitive global matching 

// RegEx in JavaScript 
// ******************* 
// - In JavaScript, regular expressions are objects (RegExp). Just like Arrays. There are methods inside of the object that we can use to help us with the matching. The exec() and test() methods are the main ones. 

// - To start using RegEx in JavaScript, we need to create the expression object first. We can use the literal or the constructor method to create the object. 
  
// Syntax
// ****** 
// let var = /pattern/modifiers;

// Ex: 
//   let re = /ab+c/i; // literal notation
//   let re = new RegExp('ab+c', 'i') // 


//   - The "pattern" is the sequence we use to filter
//     - It is composed of simple characters and/or a combination of simple and special characters.
//     - When you search for data in a text, you can use this search pattern to describe what you are searching for.

//   - The "modifiers" are just to describe if the search is global or case-sensitive 

//   Ex: 
//     var someVar = /abebe/i; 
//     - This is a pattern that can be used to match for the word "abebe"

// Using String Methods with RegEx 
// ******************************* 

// - Regular expressions are often used with string methods. The common String methods we use with regex are match(), search() and replace() methods.

// Using String search()
// ********************* 
//   The search() method searches a string for a specified value, and returns the position of the match.
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//   Ex: 
    // var str = "Abebe beso bela!";
    // var n = str.search("a");
    // console.log(n);
    
    // n is 6 

//   Using String search() With a RegEx

//     - To use Regular expression inside of the search method, we can just replace the search string with a regular expression. 

//       - Let's say we needed to do a case sensitive search of the word "beso". We can do that as follows. 

//       Ex: 
//         var str = "Abebe beso bela!";
//         var n = str.search(/Beso/i);

//         n is 6 

// Using String replace()
// ********************** 
//   - The replace() method takes two arguments and returns a new string with some or all matches of a pattern replaced by a replacement. 
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

//   Ex: 
    // var str = "Abebe beso bela!";
    // var n = str.replace("bela", "teta");
    // console.log(n);
    
//     n is "Abebe beso teta!"

//   - We can also use regular expression to find the match that we want to replace 
  
//     Ex: 
    //   var str = "Abebe beso bela!";
    //   var n = str.replace(/b/ig, "teta");   
    // console.log(n);

// Using String match()
// *********************  
//   - The match method takes regular expression as an argument and returns an Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match.

//     Ex: 
    //   var str = "Abebe bela bela!";
    //   var n = str.match(/bela/ig);

    //   console.log(n);
      
// Using the RegExp Object
// ************************ 

// In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

// Using test()
// ************ 
//   The test() method takes a string as an argument,searches for a pattern, and returns true or false, depending on the result.
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

//     Ex: 
    //   var str = "Abebe beso bela!";
    //   var patt = /bela/i;
    //   var result = patt.test(str); 
    //   console.log(result);
      
//       result is true 

// Using exec()
// ************ 
//   The exec() method takes a string as an argument,searches for a pattern, and returns the found text as an object. If no match is found, it returns an empty (null) object.
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec. 

//     Ex: 
      var str = "Abebe bela bela!";
      var patt = /bela/ig;
      var result = patt.exec(str);  
      let match;
//       while ((match = result &&  result !== null)){
//     console.log(result);
//         match++;
// }
let maxIteration = 10
let iterations = 0
while((match = result &&  result !== null)){
    console.log(result);
    iterations++
    if (iterations > maxIteration) {
        console.error("stoping the loop");
        break;
        
    }
}

// Practical example 
// Phone number validation using RegEx 


// Video to watch for next week: 
// Async JS - Callbacks, Promises, Async Await
// https://www.youtube.com/watch?v=PoRJizFvM7s 






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

function rere(given){

    let givenArrays = given.split("")
    let smallWord = givenArrays.filter(

        (singleWord) => singleWord != singleWord.toUpperCase() 

        
        
    )
    
    smallWord = smallWord.join("")
    return smallWord;
    
    
    
    
    

}
console.log(rere("yHGHoFHFHuDDHDaHFHFrJVJJFe"));


