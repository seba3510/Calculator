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
``

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

    return result;
} // operate()


//=======================================================================================




/**
 * Calculates the sum of the specified numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * 
 * @returns {number} - The sum of both numbers
 */
function sum(a, b) {


    let sum = a + b;

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


    let diff = a - b;

    return diff;

} // subtract()



