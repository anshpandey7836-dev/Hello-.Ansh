let display = document.getElementById("display");
let expression = "";
let justCalculated = false;

function updateDisplay() {
  display.value = expression
    .replace(/\*\*/g, "^")
    .replace(/\*/g, "×")
    .replace(/\//g, "÷") || "0";
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

  if (op === "×") actualOp = "*";
  if (op === "÷") actualOp = "/";
  if (op === "^") actualOp = "**";

  if (expression === "" && actualOp !== "-") return;

  let lastChar = expression.slice(-1);

  if (["+", "-", "*", "/", "%"].includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  if (expression.slice(-2) === "**") {
    expression = expression.slice(0, -2);
  }

  expression += actualOp;
  updateDisplay();
}

function allclear() {
  expression = "";
  justCalculated = false;
  display.value = "0";
}

function clearOne() {
  if (!expression) return;

  if (expression.slice(-2) === "**") {
    expression = expression.slice(0, -2);
  } else {
    expression = expression.slice(0, -1);
  }

  updateDisplay();
}

function sign() {
  if (!expression) return;

  let match = expression.match(/(-?\d+\.?\d*)$/);

  if (match) {
    let num = match[1];

    let toggled = num.startsWith("-")
      ? num.slice(1)
      : "-" + num;

    expression =
      expression.slice(0, expression.length - num.length) +
      toggled;

    updateDisplay();
  }
}

function calculate() {
  if (!expression) return;

  try {
    let result = Function(
      '"use strict"; return (' + expression + ')'
    )();

    if (!isFinite(result)) {
      display.value = "Math Error";
      expression = "";
      return;
    }

    result = parseFloat(Number(result).toPrecision(12));

    display.value = result;
    expression = result.toString();

    justCalculated = true;
  } catch (error) {
    display.value = "Invalid Expression";
    expression = "";
  }
}
