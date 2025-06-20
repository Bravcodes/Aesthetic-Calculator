// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    console.log(`Button clicked: ${input}`);
    display.value += input;
    console.log(`Display value: ${display.value}`);
}

function clearDisplay() {
    console.log("Clearing display");
    display.value = "";
}

function calculate() {
    try {
        console.log(`Calculating: ${display.value}`);
        display.value = Function('"use strict";return (' + display.value + ')')();
        console.log(`Result: ${display.value}`);
    } catch (error) {
        console.error(`Calculation error: ${error}`);
        display.value = "Error";
    }
}