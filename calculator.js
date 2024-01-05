/**
 * This script implements a basic calculator with addition, subtraction,
 * multiplication, and division operations.
 * 
 * @author Sebastian Corporan Berrios
 */


//=======================================================================================


/**
 * Stores the first number
 * 
 * @type {string}   
 */
let a = "";


//=======================================================================================



/**
 * Stores the second number
 * 
 * @type {string}
 */
let b = "";


//=======================================================================================

/**
 * Stores the operator. This determines the operation to be done with
 * the 2 numbers (addition, subtraction, multiplication, or division)
 * 
 * @type {string}
 */
let operator = "";

//=======================================================================================




/**
 * Reference to the screen that displays the output of the operation
 * 
 * @type {HTMLElement}
 */
const screenRef = document.querySelector("#input-screen");
//=======================================================================================

/**
 * Reference to all of the buttons of the calculator
 * 
 * @type {NodeList}
 */
const btnsRef = document.querySelectorAll("button");


//=======================================================================================


/**
 * Performs a mathematical operation on two numbers based on the specified operator.
 *
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @param {string} operator - The operator indicating the operation to be performed ('+', '-', '*', '÷').
 * @returns {number} - The result of the specified operation.
 * 
 */
function operate(a, b, operator) {


    a = parseFloat(a);
    b = parseFloat(b);

    let result = 0;

    // Perform the specified operation based on the provided operator.
    switch ((operator)) {
        case "+":

            result = sum(a, b);
            break;

        case "-":

            result = subtract(a, b);
            break;

        case "*":
            result = multiply(a, b);
            break;

        case "÷":

            result = divide(a, b);
            break;

        default:
            break;
    } // switch()


    displayResult(result);

} // operate()


//=======================================================================================




/**
 * Calculates the sum of the specified numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * 
 * @returns {number} The sum of a and b
 */
function sum(a, b) {

    /**
     * Stores the sum of a and b
     * @type {number}
     */
    let sum = Math.floor(a + b);

    return sum;

} // sum()

//=======================================================================================


/**
 * Subtracts two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The difference of a and b
 */
function subtract(a, b) {

    /**
     * Stores the difference of a and b
     * @type {number}
     */
    let diff = Math.floor(a - b);

    return diff;

} // subtract()

//=======================================================================================


/**
 * Multiplies two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The product of a and b
 */
function multiply(a, b) {




    /**
     * Stores the product of a and b
     * @type {number}
     */
    let mult = Math.floor(a * b);

    return mult;


} // multiply()

//=======================================================================================

/**
 * Returns the division of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The division of the two numbers
 * @throws {Error} if the second number is 0
 */
function divide(a, b) {

    if ((b == 0)) {

        var err = "Cannot divide by 0!";
        throw new Error(err);
        alert(err);

    }

    /**
     * Stores the result of dividing a and b.  The result is then rounded to prevent
     * overflowing of the screen when displaying the result.
     * @type {number}
     */
    let div = a / b;




    return div;

} // divide()

//=======================================================================================




//=======================================================================================



function handleClick() {



    let n = btnsRef.length;


    for (let index = 0; index < n; index++) {

        const button = btnsRef[index];



        button.addEventListener("click", () => {

            let val = button.value;

            if ((isDigit(val))) {

                appendDisplay(val);
                handleDigit(val);


            }

            else if ((isOperator(val))) {
                operator = val;
                clearScreen();
                console.log("The operator is: " + operator);


            }

            else if ((isEqualSign(val))) {
                clearScreen();
                operate(a, b, operator);


            }

        });

    } // for()


} // handleClick()


//=======================================================================================


/**
 * Appends the given input to the value of the screen reference.
 *
 * @param {string} input - The input to be appended to the screen value.
 * @returns {void}
 */
function appendDisplay(input) {
    //clearScreen();  
    screenRef.value += input;
    // clearScreen();
} // appendDisplay()

//=======================================================================================


/**
 * Checks if the given string consists of only digits.
 *
 * @param {string} str - The string to be checked for digits.
 * @returns {boolean} - True if the string consists of only digits, otherwise false.
 */
function isDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str[i] < '0') || (str[i] > '9')) {
            return false;
        } // if()
    } // for()
    return true;
} // isDigit()


//=======================================================================================






function handleDigit(digit) {

    if ((operator == "")) {

        a = a.toString() + digit;
        console.log("The value of A is: " + a);


    }

    else {

        b = b.toString() + digit;
        console.log("The value of B is: " + b);

    }





} // handleDigit()


function isEqualSign(input) {


    return ((input == "="));
}

console.log(isEqualSign("="));




function clearScreen() {

    screenRef.value = "";
}



function isOperator(input) {


    if ((input == "+")
        || (input == "-")
        || (input == "*")
        || (input == "/")) {
        return true;
    }


    return false;

} // input()


function displayResult(result) {


    screenRef.value = result;
} // displayResult()

handleClick();


