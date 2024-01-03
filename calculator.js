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
 * @type {number}   
 */
let a = 0;


//=======================================================================================



/**
 * Stores the second number
 * 
 * @type {number}
 */
let b = 0;


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
const screenRef = document.getElementById("input-screen");
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
    /**
     * Stores the result of the operation.
     * @type {number}
     */
    let result = 0;

    // Perform the specified operation based on the provided operator.
    switch ((operator)) {
        case "+":

            return sum(a, b);
            break;

        case "-":

            return subtract(a, b);
            break;

        case "*":
            return multiply(a, b);
            break;

        case "÷":
            return divide(a, b);
            break;

        default:
            return undefined;
    } // switch()


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


    checkDivisor(b);


    /**
     * Stores the result of dividing a and b.  The result is then rounded to prevent
     * overflowing of the screen when displaying the result.
     * @type {number}
     */
    let div = Math.floor(a / b);




    return div;

} // divide()

//=======================================================================================


/**
 * Checks if a divisor is 0.  
 * @param {number} divisor - The divisor to be checked 
 * @throws {Error} If the divisor is 0.  
 */
function checkDivisor(divisor) {

    if ((divisor == 0)) {
        var err = "Cannot divide by 0!";
        alert(err);
        throw new Error(err);
    } // if()


} // checkDivisor()


//=======================================================================================


