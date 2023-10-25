console.log("hello everyone :) ");
function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

// Get references to the HTML elements
const firstNumInput = document.getElementById("first_num");
const secondNumInput = document.getElementById("second_num");
const addBtn = document.getElementById("add_btn");
const mulBtn = document.getElementById("mul_btn");

// Function to perform addition
function performAddition() {
    const firstNum = parseFloat(firstNumInput.value);
    const secondNum = parseFloat(secondNumInput.value);
    const result = firstNum + secondNum;
    alert("Result of Addition: " + result);
}

// Function to perform multiplication
function performMultiplication() {
    const firstNum = parseFloat(firstNumInput.value);
    const secondNum = parseFloat(secondNumInput.value);
    const result = firstNum * secondNum;
    alert("Result of Multiplication: " + result);
}

// Add click event listeners to the buttons
addBtn.addEventListener("click", performAddition);
mulBtn.addEventListener("click", performMultiplication);
