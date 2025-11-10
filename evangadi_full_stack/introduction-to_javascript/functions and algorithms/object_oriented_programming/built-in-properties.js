// other properties

// charAt

// sorts
// .slice 
// .split - property is used to split words or letters ex.

console.log("abebe beso bella".split(" "));
// the bracket sign after the  split  property matters because  its on the bracket to tell from where to  begin spliting ex.  

console.log("abebe beso bella".split(""));
// no space means dividing letterby letter including the spaces. and space means find a space and split from there
console.log("abebe beso-bella".split("-"));
// meanscut the word starting from hyphen

// The String Object
// // charAt()
var someString = "Abebe Beso Bela";
console.log(someString.charAt(1).toLowerCase());
// or
console.log(someString[1].toLowerCase());
// will focus on A and change it to Lower case and be careful when writing to lower or upper the first letter should be capitalized.


// indexOf("e") - will search for the position of e and return the number of the position

console.log("abebe".indexOf('e')); // [2]
// if you have similar letters in d/f positions 
console.log("abebe".lastIndexOf('e')); // [4]
//  for the second position

// // slice()
var someString = "Abebe Beso Bela";
console.log(someString.slice(4, 9));

// // toUpperCase()
var someString = "Abebe Beso Bela";
console.log(someString.toUpperCase());

// toLowercase() - L not l remember spellign is case sensetive  
var someString = "Abebe Beso Bela";
console.log(someString.toLowerCase());


let StudentName = new String("abebe")
console.log(StudentName);

// array - object

// push() - to add an element at the end of the array
var someArray3 = ["abebe", "kebede", "almaz"]

console.log(someArray3.push("chaltu"));

// pop() - removes the last element of array
[1, 2, 3].pop() // [1,2,]
// shift() - remove element from the start of an array
[1, 2, 3].shift() // [2,3] 
// unshift() - adds an element at the start of an array
[1, 2, 3].unshift(0) // [0,1,2,3]
// concat() - adds element specially strings at the end of an array
['a', 'b'].concat('c') // ['a', 'b', 'c']
// join() - joins elements specially strings 

["a", "b", "c"].join("-") //a-b-c

// slice - cut out from any where

['a', 'b', 'c'].slice(1) // ['a', 'b']

// includes() - retunrs in boolean if the declared value exists in the array

['a', 'b', 'c'].includes('c') // true

// function calculators -  checks if given functions runs 

// .find

[3, 5, 6, 8].find((n) => n % 2 === 0) // 6

// findIndex(n) - finds the position of that doesn't fullfill the condition.
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0) // 2

// map(n) - used to transform the array to a new array

[2, 4, 3, 5].map((n) => n * 2) // [6, 8, 9, 10]
[2, 4, 6].map((n) => n * 5)

[3, 4, 5, 7].map((n) => n * 2) // [6, 8, 10, 14]


// map(n) - used to transform the array to a new array
// filter - filters the only array on your condition
[1, 4, 7, 8].filter((n) => n % 2 === 0) // [4,8] 

// reduce - reduces by calculating the array values to one.
[2, 4, 3, 7].reduce((acc, cur) => acc + cur) // 16
// every() - checks if every array elements satisfies the condition function and returns boolean true or false.
[2, 3, 4, 5].every((x) => x < 6) // true

// some() - if one of the array satisfies the condition it returns boolean true.

[3, 5, 6, 8].some((x) => x < 6) // true

// reverse - sorts the alignment in descending order.
[1, 2, 3, 4].reverse() // [4, 3, 2, 1]

// at() -  similar with charAt but can take negative numbers but when they take negatve numbers they start counting from the start 3 to backwards.  
[3, 5, 7, 8].at(-2) // 7

 


// math - object

// math objects are used to to play and use the power of numbers to use this property we must first write math word at the start.

console.log(Math.PI);// will give the value of pi 3.14.... 


// square times 2
Math.SQRT2
// Math..floor - will reduce the value down to approximate down
Math.floor(9.999999999) // 9

// ceil - increases value approximation

Math.ceil(19.000001)
// 20

// math.round - uses the  rule of math to approximate less and greater than .5 rule.

Math.round(4.3)
// 4
Math.round(4.7)
// 5

// math random - generate random numbers


Math.random() * 10 // generates random numbers between 0  and 10 
Math.reduce()






