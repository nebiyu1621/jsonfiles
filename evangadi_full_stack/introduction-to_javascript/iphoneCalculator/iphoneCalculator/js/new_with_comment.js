// // 1. Select all necessary elements (buttons, display, etc.) from the DOM


// // prepare an array of all number buttons to add event listener to all of them.



// // 2. Initialize variables to store values and operators
// let valueNumInMemory = null
// let operatorInMemory = null

// // 3. Create functions to handle:
// //    a. Number button clicks
// //    b. Operator button clicks
// //    c. Special buttons (AC, PM, %, etc.)
// //    d. Updating the display

// // functions

// // prepare a function to handle number click

// const getvalueAsStr = () => {
//     const currentValueStr = valueEl.textContent
//     return currentValueStr.split(".").join("")
// }

// // var getvalueAsStrr = () => valueEl.textContent.split(".").join("") // same as the above one

// // now to make the string number treated as a number and to enable it accept the commas when more than 4 digits

// const getValueAsNum = () =>{
//     return parseFloat(getvalueAsStr()) // this will change the string number to actual real number
// }

// const setStrAsValue = (valueStr) => {
//     const [wholeNumStr, decimalStr] = valueStr.split(".")    

//     if(decimalStr){
//         valueEl.textContent = 
//         parseFloat(wholeNumStr).toLocaleString()+"." + decimalStr
//     }else{
//         valueEl.textContent = parseFloat(valueStr).toLocaleString()
//     }
//     if(valueStr[valueStr.length - 1] === "."){
//         valueEl.textContent += "."
//     }
// }

// const handleNumberClick = (numstr) =>{
//     console.log(numstr);

//     const currentValueStr = getvalueAsStr()
//     if(currentValueStr === "0"){
//         setStrAsValue(numstr)
//     }else{
//         setStrAsValue(currentValueStr + numstr)
//     }
// }

// // 4. Add event listeners to all buttons to call the appropriate functions

// // fo loop to add event listener to all number buttons
// for(let i =0; i > numberElArray.length ; i++ ){
//     const numberEL = numberElArray[i];
//     numberEL.addEventListener("click", () =>{
//           handleNumberClick(i.toString());        
//     })
// }

// // 5. Implement the logic for each function to update the display and perform calculations

// // ...existing code...



`

1. Log the outer height of the window to the console.

2. Select necessary elements from the DOM:
   - hourEl: element with class 'hour'
   - minuteEl: element with class 'minute'
   - valueEl: element with class 'value'
   - acEl: element with class 'ac'
   - pmEl: element with class 'pm'
   - percentEl: element with class 'percent'
   - additionEl: element with class 'addition'
   - subtractionEl: element with class 'subtraction'
   - multiplicationEl: element with class 'multiplication'
   - divisionEl: element with class 'division'
   - equalEl: element with class 'equal'
   - decimalEl: element with class 'decimal'
   - number0EL to number9EL: elements with classes 'number-0' to 'number-9'

${const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0EL = document.querySelector('.number-0');
const number1EL = document.querySelector('.number-1');
const number2EL = document.querySelector('.number-2');
const number3EL = document.querySelector('.number-3');
const number4EL = document.querySelector('.number-4');
const number5EL = document.querySelector('.number-5');
const number6EL = document.querySelector('.number-6');
const number7EL = document.querySelector('.number-7');
const number8EL = document.querySelector('.number-8');
const number9EL = document.querySelector('.number-9');

3. Prepare an array of all number buttons.
    ${

    let numberElArray = [
        number0EL, number1EL, number2EL, number3EL, number4EL, number5EL, number6EL, number7EL, number8EL, number9EL
    ]
}
4. Initialize variables to store values and operators:
- valueStrInMemory: null
    - operatorInMemory: null
${

    let valueStrInMemory = null

    let operatorInMemory = null

}
5. Create functions to handle:
a.Number button clicks:
- getvalueAsStr: Get the current value as a string without commas.
      - getValueAsNum: Convert the current value string to a number.
      - setStrAsValue: Set the display value as a formatted string.
      - handleNumberClick: Handle number button clicks and update the display.
    ${

    const getvalueAsStr = () => {

        const currentValueStr = valueEl.textContent;
        return currentValueStr.split(",").join("")
    }

    const getValueAsNum = () => {
        return parseFloat(getvalueAsStr())
    }


    const setStrAsValue = (valueStr) => {
        const [wholeNumStr, decimalStr] = valueStr.split(".")

        if (decimalEl) {
            valueEl.textContent =
                parseFloat(wholeNumStr).toLocaleString + "." + decimalEl
        } else {

            valueEl.textContent = parseFloat(valueStr).toLocaleString()

        }
        // if valuestring lenght -1 all argument accepts the dot sign or in other word if the number is decimal
        // make textcontent of orignal valueEl accept dot sign to make them run with chain approach
        if (valueStr[valueStr.length - 1] === ".") {

            valueEl.textContent === "." 

        }

    }

// callback function
    const handleNumberClick = (numstr) => {

        // make the function accept argument numstr
        // if the currentvaluestr is 0 
        // make the function setStrAsValue accept argument numstr and change value of zero to the clicked number also make the buttons clicke be treated as real numbers that accepts commas, dotes and decimal
        // else if not zero or number is already written append the currentValueStr with numstr inside setStrAsValue to which will enable it to accept more numbers afte typing a single number
        if (currentValueStr === "0") {
            setStrAsValue(numstr)


        } else {
            setStrAsValue(currentValue + numstr)
        }
    }


}
b.Operator button clicks:
- getResultofOperationAsStr: Get the result of the operation as a string.
      - handleOperatorClick: Handle operator button clicks and update the display.
    ${

    const getResultofOperationAsStr = () => {

        const currentValueNum = getvalueAsStr()

        const valueNumInMemory = parseFloat(valueStrInMemory)


        let newValueNum;

        if (operatorInMemory === "addition") {
            newValueNum = valueNumInMemory + currentValueNum

        } else if (operatorInMemory === "subtraction") {
            newValueNum = valueNumInMemory - currentValueNum
        }
        else if (operatorInMemory === "multiplication") {
            newValueNum = valueNumInMemory * currentValueNum
        }
        else if (operatorInMemory === "division") {
            newValueNum = valueNumInMemory / currentValueNum
        }

        return newValueNum.toString();
    }


    // set a function that handlesoperationclick (handleOperatorClick) wh with argument operation
    //  new value currentValueStr with value function getvalueAsStr() to get the value of the types number
    // if no valueStrInMemory make valueStrInMemory contain currentValueStr and operatorInMemory = operation
    // and setStrAsValue function accept argument 0 as string

    const handleOperatorClick = () => {

        const currentValueStr = getValueAsStr()

        if (!valueStrInMemory) {

            valueStrInMemory = currentValueStr

            operatorInMemory = operation
            setStrAsValue("0")
        }

    }

}
c.Special buttons(AC, PM, %, etc.):
- Add event listeners to the AC, PM, and percent buttons to handle their respective functionalities.
    ${

    // event to acEl on click function is setStrAsValue accept zero and valueStrInMemory null and operatorInMemory null

    acEl.addEventListener("click", () => {
        setStrAsValue("0")
        valueStrInMemory = null
        operatorInMemory = null
    })

    // when pmEl clicked store currentValueNum with getValueAsNum to get the number and store currentValueStr with getValueAsStr()
    // if the current value equals -0 change setStrValue fun with 0 and return
    // if current value greater or equals 0 setStrValue(- append with currentValueStr)
    // else setStrASValue function with currentvstr.mehtod subtring(1) which will cancel the negative at the start

    pmEl.addEventListener("click", () => {

        const currentValueNum = getValueAsNum()

        const currentValueStr = getValueAsStr()


        if (currentValueStr === "-0") {
            setStrAsValue = "0"
            return
        } if (currentValueNum >= 0) {
            setStrAsValue("-" + currentValueStr)
        } else {
            setStrAsValue(currentValueStr.substring(1))
        }


    })


    // when percent is clicked store currentnum with getValueAsNum function and newvaluenum with currentvnum / 100
    // setrargmnt to setStrValue with newValueNum.toString()
    // and valuestrinmemory with null and operatorInMemory with null

    percentEl.addEventListener("click", () => {
        const currentValueNum = getValueAsNum()

        const newValueNum = currentValueNum / 100

        setStrAsValue(newValueNum.toString())

        valueStrInMemory = null
        operatorInMemory = null
    })


}


6. Add event listeners to all buttons to call the appropriate functions:
- Add event listeners to the operator buttons(addition, subtraction, multiplication, division).
    //    addition el accepts event click and calls handleOperatorClick with argument addition,subtraction, multiplication, division
    additionEl.addEventListener("click", () => {

        handleOperatorClick("addition")
    })
subtractionEl.addEventListener("click", () => {

    handleOperatorClick("subtraction")
})
multiplicationEl.addEventListener("click", () => {

    handleOperatorClick("multipliaction")
})
divisionEl.addEventListener("click", () => {

    handleOperatorClick("division")
})

    - Add event listener to the equal button to calculate and display the result.
        //   equalEl accepts event click and calls handleOperatorClick with argument null if valueStrInMemory is true setStrAsValue with getResultofOperationAsStr and valueStrInMemory with null and operatorInMemory with null

        equalEl.addEventListener("click", () => {

            if (valueStrInMemory) {
                setStrAsValue(getResultofOperationAsStr)
            }
            valueStrInMemory = null
            
            operatorInMemory = null

        })

        - Add event listeners to the number buttons and decimal button to handle clicks.
            //  numberElArray is an array of all number buttons
            //  for loop to add event listener to all number buttons
            //  numberElArray[i] stored in numberEl accepts event click and calls handleNumberClick with argument i.toString()

            // and decimalEl accepts event click and calls handleNumberClick with argument "."
            // if current 
            ${


    for (let i = 0; i < numberElArray.length; i++) {

        const numberEl = numberElArray[i]

        numberEl.addEventListener("click", () => {

            handleNumberClick(i.toString())

        })


    }

    decimalEl.addEventListener("click", () => {

        // store the getValueAsStr() inside currentValueStr 
        // if the currentValueStr doesn't include (use method includes to check if it includes ceratin condition) "." give argument currentValueStr to append with dot(.) string

        const currentValueStr = getValueAsStr()

        if (!currentValueStr.includes(".")) {

            getValueAsStr(currentValueStr + ".")

        }

    })

}
7. Update the time display every second using setInterval.`


${


    // prepare a function with updateTime with no argument in it

    // store the value of the Current date and time inside currentTime (new Date)
    // extract the currentHour and currentMinute from currentTime object and store them in currentHour and currentMinute
    // if the current hour is greater than 12 minus that time to 12 this will prevent the hour from being displayed more than 12 hour
    // make the text content of hourEL and minuteEl var toString and padStart if two digits make them start with zero and should be two digits
    // out of the function setInterval  to run every 1 second 
    // call function to run immediately/smoothly after one second is 


    const updateTime = () => {

    const currentTime = new Date() // this will enable us to work with dates

    let currentHour = currentTime.getHours()

    let  currentMinute = currentTime.getMinutes()

    // now check for the hour to not exceed 12 hour 

    if (currentHour> 12) {

        currentHour -= 12

    }

    hourEl.textContent = currentHour.toString().padStart(2, "0")

    minuteEl.textContent = currentMinute.toString().padStart(2, "0")


}
    setInterval(updateTime, 1000)

    updateTime()

}


















