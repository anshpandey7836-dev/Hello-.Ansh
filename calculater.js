let display = document.getElementById("display");
let expression = "";
let justCalculated = false;

function updateDisplay() {
    let showExpression = expression
        .replace(/\*\*/g, "^")
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    display.value = showExpression || "0";
}

function addNumber(num) {
    if (justCalculated) {
        expression = "";
        justCalculated = false;
    }

    expression += num;
    updateDisplay();
}

function addOperator(op) {
    justCalculated = false;

    let actualOp = op;

    switch (op) {
        case "×":
            actualOp = "*";
            break;
        case "÷":
            actualOp = "/";
            break;
        case "^":
            actualOp = "**";
            break;
        case "%":
            actualOp = "%";
            break;
    }

    if (
        expression === "" &&
        actualOp !== "-" &&
        actualOp !== "("
    ) {
        return;
    }

    let last = expression.slice(-1);

    if (["+", "-", "*", "/", "%"].includes(last)) {
        expression = expression.slice(0, -1);
    }

    expression += actualOp;
    updateDisplay();
}

function addBracket(bracket) {
    if (justCalculated) {
        expression = "";
        justCalculated = false;
    }

    expression += bracket;
    updateDisplay();
}

function addDecimal() {
    let parts = expression.split(/[\+\-\*\/\(\)]/);
    let currentNumber = parts[parts.length - 1];

    if (!currentNumber.includes(".")) {
        expression += ".";
        updateDisplay();
    }
}

function clearOne() {
    if (!expression) return;

    if (expression.endsWith("**")) {
        expression = expression.slice(0, -2);
    } else {
        expression = expression.slice(0, -1);
    }

    updateDisplay();
}

function allclear() {
    expression = "";
    justCalculated = false;
    display.value = "0";
}

function sign() {
    let match = expression.match(/(-?\d+\.?\d*)$/);

    if (!match) return;

    let num = match[1];

    let newNum = num.startsWith("-")
        ? num.slice(1)
        : "-" + num;

    expression =
        expression.slice(0, expression.length - num.length) +
        newNum;

    updateDisplay();
}

function calculate() {
    if (!expression) return;

    try {

        let open = (expression.match(/\(/g) || []).length;
        let close = (expression.match(/\)/g) || []).length;

        if (open !== close) {
            display.value = "Bracket Error";
            return;
        }

        let result = Function(
            `"use strict"; return (${expression})`
        )();

        if (
            result === Infinity ||
            result === -Infinity ||
            isNaN(result)
        ) {
            display.value = "Math Error";
            expression = "";
            return;
        }

        result = parseFloat(result.toPrecision(12));

        display.value = result;
        expression = result.toString();
        justCalculated = true;

    } catch (e) {
        display.value = "Invalid Expression";
        expression = "";
    }
}
