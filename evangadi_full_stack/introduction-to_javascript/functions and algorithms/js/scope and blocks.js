




// blocked element means when we declare a variable inisde another function or block and that decalred elemet will not work outside that block except var .
function neba(num1, num2) {
    var r = 45;
    let t = 56;
    {
        console.log(r);
// the above will be printed because it's decalred with var  the below will not because it is decalred with let.
        console.log(t)
    }
}
console.log


// let and const are available only insidethe block {} and var is available inside and outsideof the block its called global variable.

// types of variable-scopes

// function scope
// - Accessible only within the current function execpt var.
// function rt(r,t){ 
// let and const g =  r + t those variables are only available inside the function you can't call those variables outside of the function decalred. 
// }
// 
// Global scope
// -Accessible throughout the entire program

// Block scope
// - Accessible only within that block (e.g, within loops, conditionals, or an except function.)









