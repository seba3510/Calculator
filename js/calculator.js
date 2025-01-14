let a = "";

let b = "";

let operator = "";

const screenElem = document.querySelector("#input-screen");

const btnsElem = document.querySelectorAll("button");

//=======================================================================================


function operate(a, b, operator) {

	a = parseFloat(a);
	b = parseFloat(b);

	let result = parseFloat(0);

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

	displayResult(result);
} // operate()

//=======================================================================================


function sum(a, b) {
	let sum = Math.floor(a + b);
	return sum;
} // sum()

//=======================================================================================


function subtract(a, b) {
	let diff = Math.floor(a - b);
	return diff;
} // subtract()

//=======================================================================================

function multiply(a, b) {
	let mult = Math.floor(a * b);
	return mult;
} // multiply()

//=======================================================================================

function divide(a, b) {

	checkDivisor(b);

	let div = Math.floor(a / b);

	return div;
} // divide()

//=======================================================================================


function handleClick() {

	let n = btnsElem.length;

	for (let index = 0; index < n; index++) {

		let button = btnsElem[index];

		button.addEventListener("click", () => {

			let val = button.value;

			// check what type of button was clicked
			if ((isDigit(val))) {
				appendDisplay(val);
				handleDigit(val);
			}// if

			else if ((isOperator(val))) {
				clearScreen();
				operator = val;
			}// else if

			else if ((isEqualSign(val))) {
				clearScreen();
				operate(a, b, operator);
				a = screenElem.value;
				b = "";
				operator = "";
			}// else if

			else if ((val === "clear")) {
				clearScreen();
				resetValues();
			}// else if
		});

		continue;
	} // for()
} // handleClick()

//=======================================================================================

function appendDisplay(input) {
	screenElem.value += input;
} // appendDisplay()

//=======================================================================================


function isDigit(str) {
	let n = str.length;

	let result = false;

	for (let i = 0; i < n; i++) {

		let char = str[i];

		if ((char < "0") ||
			(char > "9")) {
			return result;
		} // if

		result = true;
	} // for()

	return result;
} // isDigit()

//=======================================================================================


function handleDigit(digit) {
	if ((operator === "")) {
		a = a.toString() + digit;
	}// if

	else if ((a != "")) {
		b = b.toString() + digit;
	}// else if
} // handleDigit()

//=======================================================================================


function isEqualSign(input) {
	return ((input === "="));
} //isEqualSign()
//=======================================================================================

function clearScreen() {
	screenElem.value = "";
} // clearScreen()

//=======================================================================================


function isOperator(input) {
	return ((input === "+")) ||
		((input === "-")) ||
		((input === "*")) ||
		((input === "/"));
} // input()

//=======================================================================================


function displayResult(result) {
	screenElem.value = result;
} // displayResult()

//=======================================================================================


function checkDivisor(divisor) {
	if ((divisor == 0)) {
		var err = "Cannot divide by 0!";
		alert(err);
		throw new Error(err);
	} // if
} // checkDivisor()
//=======================================================================================

function resetValues() {
	a = "";
	b = "";
	operator = "";
} // resetValues()

//=======================================================================================


handleClick();

