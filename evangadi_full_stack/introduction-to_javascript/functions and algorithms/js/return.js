





// return code means to hold the result for now and use it when declaring another variable as a collaborration.
function adder(x, y) {
    console.log(x + y);
    return x +y;
}
// adder(8, 9); 
console.log(adder(8,67))

function average(num1, num2) {
    let result = adder(num1, num2) / 2
    console.log(result);
   return result;
}
console.log(average(10, 20))

// return code means to hold the result for now and use it when declaring another variable as a collaborration.


// to check what have been declared in a variable function like funtion add (x, y){} to check what have been inserted in variable or envoced.
function average(num1, num2) {
    console.log("value of num2: ". num2 );
    let result = adder (num1, num2) / 2
    return result;
}
// and now when we envoce a variable one by one at a time the console will show what value have been given to the varaible. 









