// meta characters sets and ranges 
// syntax: /pattern/{flags}
// the inbuilt Regular Expression class.
synatx: var reg = new RegExp("pattern", "flags")
// ranges
// note: when specifying a regex it should be inside the / / and the value to be searched should be inside the / / as well
var word = "Air Birm Circle";
var reg = (/[ABC]irm/)

console.log(reg.exec(word)) // [ 'Birm', index: 4, input: 'Air Birm Circle', groups: undefined ];

var word = "Same Name Fame Glam";
var reg = (/[A-Z]ame/g)

// console.log(reg.exec(word)) // [ 'A', index: 0, input: 'Air Birm Circle', groups: undefined ];
// console.log(reg.exec(word)) // [ 'B', index: 4, input: 'Air Birm Circle', groups: undefined ];
// console.log(reg.exec(word)) // [ 'C', index: 8, input: 'Air Birm Circle', groups: undefined ];
console.log(reg.exec(word)) //
// // sets
var space = (/[\s]/)

// console.log(space.exec(word)) // [ ' ', index: 3, input: 'Air Birm Circle', groups: undefined ];



// // Quantifiers - used to select a value multiple times and decide how many times it should be selected

var digit = (/[\d]{3}/) // this will select 3 digits of only numbers.

var digit2 = (/[\d]{3, 7}/) // this will select from 3 digits up to 7 of only numbers.
// to select from particular value to above
var digit3 = (/[\d]{1,}/) // this will select one digit or above numbers.

//  how to set start and end character

var stend = (/^[a-z A-Z] {5} [0-9]{4} [a-z A-Z]$/) // this will select 5 characters of alphabets at the start, 4 characters of numbers and 1 character of alphabets at the end

// to select for example https and http = "the secured sites have https://etc and unsecured sites have http://"


var stat = " the secured sites have https://etc and unsecured sites have http://"

var http_s = (/https(0,1)/) // this will select http and https when reaches at https considers occuring zero or one times.
var http_s = (/https?/)
console.log(http_s.exec(stat)) // [ 'https', index: 26, input: ' the secured;

console.log(http_s.exec(stat)) // [ 'http', index: 63, input: ' the secured;


// /// // Regex Methods in javascript 

// 1. str.search(pattern) - this method is used to search for a pattern in a string and returns the index of the first occurrence of the pattern. If the pattern is not found, it returns -1.

// 2. str.test(str) - this method is used to test a pattern in a string and returns true if the pattern is found, otherwise it returns false.

// 3. str.match(pattern) - this method is used to search for a pattern in a string and returns an array of the matched pattern. If the pattern is not found, it returns null.
// if the flag is not set it will return only the first occurrence of the pattern.
// and if the flag is set to g(global) it will return all the occurrences of the pattern.

var str = "This is a black pen. this pen is really amazing";

var pattern = /pen/

console.log(str.search(pattern)) // 10 // note that it has only returned the first occurrence only because the flag is not global
console.log(pattern.test(str)) // true
console.log(str.match(pattern)) // [ 'pen', index: 10, input: 'This is a black pen. this pen is really amazing', groups: undefined ]; 
// if the var is global it will return all the occurrences of the pattern in an array.

// // trying with the global flag
var str = "This is a black pen. this pen is really amazing";
var pattern = /pen/g
console.log(str.match(pattern)) // [ 'pen', 'pen' ] // this will return all the occurrences of the pattern in an array.


// // trying with the global flag and case insensitive flag

var str = "This is a black pen. this pen is really amazing Pen";
var pattern = /pen/gi 
// or 
var pattern = new RegExp("pen", "gi") // ("pattern", "flags")

console.log(str.match(pattern)) // [ 'pen', 'pen', 'Pen' ] // this will return all the occurrences of the pattern in an array.

var pattern = /./gi // this will return all the characters in the string [ 'T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'b', 'l', 'a', 'c', 'k', ' ', 'p', 'e', 'n', '.', ' ', 't', 'h', 'i', 's', ' ', 'p', 'e', 'n', ' ', 'i', 's', ' ', 'r', 'e', 'a', 'l', 'l', 'y', ' ', 'a', 'm', 'a', 'z', 'i', 'n', 'g', ' ', 'P', 'e', 'n' ]

var pattern = /./i // case insensetive // this will return only the first character in the string [ 'T' ] . sign means any character(symbol, num, alpha, space) except new line.

// the difference between .exec() and .match() is that .exec() returns an array of the first occurrence of the pattern and .match() returns an array of all the occurrences of the pattern.

// difference
`.exec():

This method is called on a regular expression object.
It returns an array containing the first match of the pattern in the string.
The returned array includes the matched text, the index of the match, the input string, and any capturing groups.
If no match is found, it returns null.`

`.match():

This method is called on a string object.
It returns an array of all matches of the pattern in the string if the global (g) flag is used.
Without the global flag, it returns an array containing the first match and its details.
If no match is found, it returns null.`



// var str = "9988776655"
// var str = "919988776655" // if we add 91 at the beggining its called optional then the console we log null becuase its added after the all process ended 
var str = "+919988776655" // if we add 91 at the beggining its called optional then the console we log null becuase its added after the all process ended 



// var pattern = /^[\d] {10}$/g // this will check for only digit numbers at first position and continiues to the last until it finds 10 length digits. and searches global which is goes/checks through all the string given 
var pattern = /^ (\+91) [\d] {10}$/g // here (\+91) indicates that its an optional string and the \(back-slash) indicates that the + (plus sign is not an quantifier its a string) should be treated as a string

console.log(str.match(pattern));


var str = "www.google.com"

var pattern = /^www\.[\w]+.(com|co|in)$/g // this (com|co|in)$/g indicates that match one of com , co, in at the end of the string and () is used to compare only the last part of the string if written like /^www\.[\w]+.com|co|in$/g with no brackets   it will compare in with the remaining string and will return the in as the output. if present in string

console.log(str.match(pattern));


// creating a valid user name for a form 

var str = "user_name"

var pattern = /^[\w]{6,8}$/



















