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
 * @global   
 */
let a = "";

/**
 * Stores the second number
 * 
 * @type {string}
 * @global 
 */
let b = "";

/**
 * Stores the operator. This determines the operation to be done with
 * the 2 numbers (addition, subtraction, multiplication, or division)
 * 
 * @type {string}
 * @global
 */
let operator = "";




/**
 * Reference to the screen that displays the output of the operation
 * 
 * @type {HTMLElement}
 */
const screenRef = document.querySelector("#input-screen");

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
 */
function operate(a, b, operator) {

    // convert a and b to floating point numbers
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
        case "/":
            result = divide(a, b);
            break;
        default:
            break;
    } // switch()




    return displayResult(result);


} // operate()

//=======================================================================================

/**
 * Calculates the sum of the specified numbers
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number
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
 * 
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
 * 
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
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The division of the two numbers
 * @throws {Error} if the second number is 0
 */
function divide(a, b) {


    checkDivisor(b);


    /**
     * Stores the result of dividing a and b. The result is then rounded to prevent
     * overflowing of the screen when displaying the result.
     * @type {number}
     */
    let div = Math.floor(a / b);

    return div;
} // divide()

//=======================================================================================

/**
 * Handles button clicks and performs corresponding actions.
 */
function handleClick() {


    let n = btnsRef.length;

    // iterate through all buttons
    for (let index = 0; (index <= n - 1); index++) {

        /**
         * Reference to the button that was clicked.  
         * @type {HTMLButtonElement}
         */
        const button = btnsRef[index];

        // add an event listener to each button 
        button.addEventListener("click", () => {





            /**
             * Represents the value of the button that was just clicked
             * @type {string}
             */
            let val = button.value;

            // check what type of button was clicked
            if ((isDigit(val))) {
                appendDisplay(val);
                handleDigit(val);
            }

            else if ((isOperator(val))) {
                clearScreen();
                operator = val;
                //console.log("The operator is: " + operator);
            }

            else if ((isEqualSign(val))) {
                clearScreen();
                operate(a, b, operator);
                resetValues();



            }

            else if ((val == "clear")) {

                clearScreen();

            }



        });




    } // for()
} // handleClick()

//=======================================================================================

/**
 * Appends the given input to the value of the screen reference.
 *
 * @param {string} input - The input to be appended to the screen value.
 */
function appendDisplay(input) {
    //clearScreen();  
    screenRef.value += input;
} // appendDisplay()

//=======================================================================================

/**
 * Checks if the given string consists of only digits.
 *
 * @param {string} str - The string to be checked for digits.
 * @returns {boolean} - True if the string consists of only digits, otherwise false.
 */
function isDigit(str) {


    let n = str.length;


    let result = false;

    for (let i = 0; i < n; i++) {



        let char = str[i];


        if (((char < '0'))
            || ((char > '9'))) {
            return result;
        } // if()


        result = true;

    } // for()

    return result;



} // isDigit()




//=======================================================================================

/**
 * Handles the input of digits and updates the corresponding operand (a or b).
 * 
 * @param {string} digit - The digit to be handled.
 */
function handleDigit(digit) {
    if ((operator == "")) {
        a = a.toString() + digit;
        //console.log("The value of A is: " + a);
    }

    else {
        b = b.toString() + digit;
        //console.log("The value of B is: " + b);
    }
} // handleDigit()

//=======================================================================================

/**
 * Checks if the given input is the equal sign (=).
 * 
 * @param {string} input - The input to be checked.
 * @returns {boolean} - True if the input is the equal sign, otherwise false.
 */
function isEqualSign(input) {
    return ((input == "="));
}//isEqualSign()
//=======================================================================================

/**
 * Clears the calculator screen.=
 */
function clearScreen() {


    screenRef.value = "";

} // clearScreen()

//=======================================================================================

/**
 * Checks if the given input is an operator (+, -, *, /).
 * 
 * @param {string} input - The input to be checked.
 * @returns {boolean} - True if the input is an operator, otherwise false.
 */
function isOperator(input) {
    return (((input == "+")) || ((input == "-")) || ((input == "*")) || ((input == "/")));
} // input()

//=======================================================================================

/**
 * Displays the result on the calculator screen.
 * 
 * @param {number} result - The result to be displayed.
 */
function displayResult(result) {
    screenRef.value = result;
} // displayResult()


//=======================================================================================

/**
 * Checks if the given divisor is valid and not equal to zero.
 *
 * This function throws an error and displays an alert if the divisor is zero,
 * as division by zero is not allowed.
 *
 * @param {number} divisor - The divisor to be checked.
 * @throws {Error} Throws an error with a message if the divisor is zero.
 * @returns {void}
 */
function checkDivisor(divisor) {


    if ((divisor == 0)) {
        var err = "Cannot divide by 0!";
        alert(err);
        throw new Error(err);
    } // if()




} // checkDivisor()

/**
 * Resets the values of {@link a}, {@link b}, and {@link operator}.
 */
function resetValues() {
    a = "";
    b = "";
    operator = "";
} // resetValues()


//=======================================================================================


// Initialize the event handlers
handleClick();


