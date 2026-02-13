console.log(window.outerHeight);

// 1. Select all necessary elements (buttons, display, etc.) from the DOM
const hourEl = document.querySelector('.hour');
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

// prepare an array of all number buttons to add event listener to all of them.
const numberElArray = [
    number0EL, number1EL, number2EL, number3EL, number4EL, number5EL, number6EL, number7EL, number8EL, number9EL
]

// 2. Initialize variables to store values and operators
let valueStrInMemory = null;
let operatorInMemory = null;

// 3. Create functions to handle:
//    a. Number button clicks
//    b. Operator button clicks
//    c. Special buttons (AC, PM, %, etc.)
//    d. Updating the display

// functions
const getValueAsStr = () => {
    const currentValueStr = valueEl.textContent;
    return currentValueStr.split(',').join('');
}
// or

// const getvalueAsStr = () =>  valueEl.textContent.split(',').join(''); //this also does same as the above one


const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
}

const setStrAsValue = (valueStr) => {
    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl.textContent =
            parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(valueStr).toLocaleString();
    }

    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
    }
}

const handleNumberClick = (numstr) => {
    console.log(numstr);

    const currentValueStr = getValueAsStr();
    if(currentValueStr === '0'){
        // valueEl.textContent = numstr;
        setStrAsValue(numstr);
    
}else{
    // valueEl.textContent = parseFloat(currentValueStr + numstr).toLocaleString()
    setStrAsValue(currentValueStr + numstr);
}
}



const getResultofOperationAsStr = () => {

    const currentValueNum = getValueAsNum();

    const valueNumInMemory = parseFloat(valueStrInMemory);

    let newValueNum;

    if (operatorInMemory === "addition") {
        newValueNum = valueNumInMemory + currentValueNum;
    } else if (operatorInMemory === "subtraction") {
        newValueNum = valueNumInMemory - currentValueNum;
    } else if (operatorInMemory === "multiplication") {
        newValueNum = valueNumInMemory * currentValueNum;
    } else if (operatorInMemory === "division") {
        newValueNum = valueNumInMemory / currentValueNum;
    }
    
    return newValueNum.toString();
}





const handleOperatorClick = (operation) => {
    const currentValueStr = getValueAsStr();
 
    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        setStrAsValue('0');
        return;
    }
    ;

    valueStrInMemory = getResultofOperationAsStr()

    operatorInMemory = operation;
    setStrAsValue('0');
}

// 4. Add event listeners to all buttons to call the appropriate functions

acEl.addEventListener('click', () => {
    setStrAsValue('0');
     valueStrInMemory = null;
     operatorInMemory = null;
})

pmEl.addEventListener('click', () => {

    const currentValueNum = getValueAsNum();
    
    const currentValueStr = getValueAsStr();
// this condition ensures that if the current value is 0 or -0, it will return 0 to make change when the negative sign is called again

    if(currentValueStr === '-0' ){
        setStrAsValue('0');
        return;
    }

    if(currentValueNum >= 0){
        setStrAsValue('-' + currentValueStr);

    }else{
        setStrAsValue(currentValueStr.substring(1))
    }
    
})

percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString());
    valueStrInMemory = null;
    operatorInMemory = null;
    
})

// add event listener to the operator buttons

additionEl.addEventListener('click', () => {
    handleOperatorClick('addition');
})
subtractionEl.addEventListener('click', () => {
    handleOperatorClick('subtraction');
})
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick('multiplication');
})
divisionEl.addEventListener('click', () => {
    handleOperatorClick('division');
})

equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
        setStrAsValue(getResultofOperationAsStr())

        valueStrInMemory = null;
        operatorInMemory = null;
    }

    

    // setStrAsValue(newValueNum.toString());
    // valueStrInMemory = null;
    // operatorInMemory = null;
})

// for loop if one of the buttons is clicked, it will call the handleNumberClick function
// for loop in here what it does is it will loop through all the number buttons and add an event listener to each of them
// Add Event Listener to Number Buttons and decimal

for(let i = 0; i < numberElArray.length; i++){
    const numberEL = numberElArray[i];
    numberEL.addEventListener("click", ()=> {
        handleNumberClick(i.toString())
    })
}

decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes(".")) {
        setStrAsValue(currentValueStr + ".");
    }
})


const updateTime = () => {


    const currentTime = new Date()

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();

if(currentHour > 12){
    currentHour -= 12;
}
    hourEl.textContent = currentHour.toString().padStart(2, '0') // adds zero only to one digit
    minuteEl.textContent = currentMinute.toString().padStart(2, '0')

}
setInterval(updateTime, 1000)
// Call updateTime immediately to set the initial time display

updateTime()

// ..............for another day..........................//





