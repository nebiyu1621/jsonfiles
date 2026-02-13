
var user_name = document.getElementById("username")

var form = document.getElementById("form")

var error = document.getElementById("username-error")

var form_container = document.querySelector(".form-container")

console.log("Form container width", form_container.offsetWidth);

// user_name.addEventListener("input", function(e){

//     var pattern = /^[\w]{6,8}$/ // this will check for only digit numbers at first position and continiues to the last until it finds 10 length digits. and searches global which is goes/checks through all the string given. here \w is used to check for only word characters and {6,8} is used to check for the length of the string should be between 6 to 8 characters
    
//     var currentTarget = e.target.value

//     console.log(pattern.test(currentTarget));

//     var valid = pattern.test(currentTarget)

//     if(valid){


//         error.style.display = "none"
        
//     }else{
//         error.style.display = "block"
//     }
    
    
// })




user_name.addEventListener("input", function(e){

    pattern = /^[\w]{6,8}$/

    currentValue = e.target.value

    valid = pattern.test(currentValue)
    
    if(valid){
        error.style.display = "none"
        
        
    }else{
        error.style.display = "block"
    }
    
    
})
































