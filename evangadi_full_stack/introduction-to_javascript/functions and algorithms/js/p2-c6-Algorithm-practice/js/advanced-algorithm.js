// Question 1 (Edabit)
// What's Hiding Amongst the Crowd?

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// Steps to follow when solving any kind of JavaScript problem:
//   1. Understand the problem

//   2. Solve it on paper
//     - Use example cases to make sure that you can actually solve the problem on paper

//       NOTE: The most difficult part for new comers is not actually solving the problem. The difficulty is in understanding & identifying the smallest steps the brain takes to solve the problem. (Our brain is sometimes too fast for us to comprehend)

//   3. Craft a general step that can be followed to solve any kind of similar problem

//     - This is where you would consider scenarios that might not have been covered in the examples you solve above and tweak the solution accordingly

//   4. Write the pseudo code

//     - Identify the smallest steps to follow and pick what JavaScript functionality you need to use to cover that step

//   5. Translate to JavaScript
//     - Follow the pseudo code and write the solution

//   6. Test

// Solution:
// - I need something to save the hidden letters when found
//   Declare a variable = hiddenLetter = ''

// - if empty (return no value message)
//   if (strValue) {
//     //do something
//   }

// - check if given thing is a string to begin with

//   if (typeof strValue === 'string') {
//     // this is a string
//   }else{
//     if not return some message
//   }
// Use loop
// for (0, strValue.length, ++ )
// 1. find first letter
//   strValue.charAt(0);
// 2. check if uppercase
// convert to uppercase using toUpperCase()
// compare with the original
// if equal, it was uppercase. If not it was lowercase

//   if lowercase save in memory
//     Add to hiddenLetter
// 3. move to the next letter
//   if lowercase add to the saved memory
//   if upper case ignore
//   We need to loop through the strings

//     use the string property strValue.length
//     for (0, strValue.length, ++ )
// 4. Continue to the next letter
//   repeat the same thing

//   return hiddenLetter

function findHiddenWord(a) {
  var strValue = a;
  var hiddenLetter = "";
  if (strValue) {
    if (typeof strValue === "string") {
      for (var i = 0; i < strValue.length; i++) {
        if (strValue.charAt(i) !== strValue.charAt(i).toUpperCase()) {
          hiddenLetter = hiddenLetter + strValue.charAt(i);
        }
      }
    } else {
      return "Please enter a String value";
    }
  } else {
    return "Please enter a value first";
  }
  return hiddenLetter;
}

// Test
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

// console.log(findHiddenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

// Question 2 (Edabit)
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
//   arr1's min is greater than arr2's min.
//   arr1's max is less than arr2's max

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// arr1, arr2
// check if both inputs are array
//   return please enter array value
//   Use Array.isArray

// 1. get the min value of array 1
// arr1.sort()
// arr1[0] is the min

// 2. get the min value of array 2
// arr2.sort()
// arr2[0] is the min

// 3. compare the two and if min arr 1 is less than or = return false
// arr1[0] <=   arr2[0]  return false

// 4. get the max value of array 1
// arr1.sort()
// arr1[arr1.length - 1] is the max

// 5. get the max value of array 2
// arr2.sort()
// arr2[arr2.length - 1] is the max

// 6. compare the two and if max arr 1 is greate than or = max arr 2 return false
// arr1[arr1.length - 1] >= arr2[arr2.length - 1] return false

// 7. return true

function canNest(arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    return "Both values need to Array";
  }
  let arr1Sorted = arr1.sort();
  let arr2Sorted = arr2.sort();
  let arr1min = arr1Sorted[0];
  let arr2min = arr2Sorted[0];
  let arr1max = arr1Sorted[arr1.length - 1];
  let arr2max = arr2Sorted[arr2.length - 1];

  if (arr1min <= arr2min || arr1max >= arr2max) {
    return false;
  } else {
    return true;
  }
}

// Test
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
console.log(canNest([3, 1], [4, 0]));

// Question 3:
// Solve question 2 with out using any built in functions. You can still use Array object properties.
