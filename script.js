const AC = document.getElementById("AC");
const DE = document.getElementById("DE");
const decimal = document.getElementById(".");
const divide = document.getElementById("/");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("*");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const subtract = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const doubleZero = document.getElementById("00");
const zero = document.getElementById("0");
const equals = document.getElementById("=");
const display = document.getElementById("display");

AC.addEventListener("click", () => {
    display.value = '';
});

DE.addEventListener("click", () => {
    display.value = display.value.toString().slice(0,-1)
});

decimal.addEventListener("click", () => {
    display.value += '.';
});

divide.addEventListener("click", () => {
    display.value += '/';
});

seven.addEventListener("click", () => {
    display.value += '7';
});

eight.addEventListener("click", () => {
    display.value += '8';
});

nine.addEventListener("click", () => {
    display.value += '9';
});

multiply.addEventListener("click", () => {
    display.value += '*';
});

four.addEventListener("click", () => {
    display.value += '4';
});

five.addEventListener("click", () => {
    display.value += '5';
});

six.addEventListener("click", () => {
    display.value += '6';
});

subtract.addEventListener("click", () => {
    display.value += '-';
});

one.addEventListener("click", () => {
    display.value += '1';
});

two.addEventListener("click", () => {
    display.value += '2';
});

three.addEventListener("click", () => {
    display.value += '3';
});

plus.addEventListener("click", () => {
    display.value += '+';
});

doubleZero.addEventListener("click", () => {
    display.value += '00';
});

zero.addEventListener("click", () => {
    display.value += '0';
});

equals.addEventListener("click", () => {
    display.value = eval(display.value);
});

