// let firstNumber = document.getElementById("first-number");
// let operator = document.getElementById("operator");
// let secondNumber = document.getElementById("second-number");
// let result = document.getElementById("result");

// let printFirstNumber = true;
// let selectedOpeator = null;
// function addNumber(num) {
//     if(printFirstNumber){
//         if(num === "." && firstNumber.value.includes(".")) return;
//         firstNumber.value +=  num;
//     } else {
//         if(num === "." && secondNumber.value.includes(".")) return;
//         secondNumber.value += num;
//     }
// }

// function addOperator(op) {
//     selectedOpeator = op;
//     printFirstNumber = false;
//     operator.value = op;
// }

// function allclear(){
//     firstNumber.value = "";
//     operator.value = "";
//     secondNumber.value = "";
//     result.value = "";

//     printFirstNumber = true;
//     selectedOpeator = null;
// }

// function clearOne(){
//     if(printFirstNumber){
//         firstNumber.value = firstNumber.value.slice(0, -1);
//     } else {
//         secondNumber.value = secondNumber.value.slice(0, -1);
//     }
// }

// function calculate(){

//     if(firstNumber.value===""  || secondNumber.value===""  || operator.value==="" ){
//         result.value = "Invalid Operator or Number";
//         return;
//     }

//     let f = (Number)(firstNumber.value);
//     let s = (Number)(secondNumber.value);

//     switch(selectedOpeator){
//         case "+": result.value = f + s; break;
//         case "-": result.value = f - s; break;
//         case "*":  result.value = f * s; break;
//         case "/": result.value = (s==0) ? "can't divide by zero" : (f/s); break;
//         case "%":  result.value = f % s; break;
//         case "^":  result.value = f**s;  break;
//     }
// }


// function changeField(field) {
//     if(field === '1'){
//         printFirstNumber = true;
//     } else {
//         printFirstNumber = false;
//     }
// }

// function sign(){
//     if(printFirstNumber){
//         firstNumber.value = "-" + firstNumber.value;
//     } else {
//         secondNumber.value = "-" + secondNumber.value;
//     }
// }
let display = document.getElementById("display");
let expression = "";
let justCalculated = false;

function addNumber(num) {
  if (justCalculated) {
    expression = "";
    justCalculated = false;
  }
  if (num === ".") {
    let parts = expression.split(/[\+\-\*\/\%]/);
    let lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) return;
  }
  expression += String(num);
  display.value = expression.replace(/\*\*/g, "^");
}

function addOperator(op) {
  if (!expression && op !== "-") return;
  justCalculated = false;

  // Display symbol → actual operator conversion
  let actualOp;
  if (op === "^") actualOp = "**";
  else if (op === "÷") actualOp = "/";
  else if (op === "×") actualOp = "*";
  else actualOp = op;

  if (expression.slice(-2) === "**") {
    expression = expression.slice(0, -2) + actualOp;
  } else if (["+", "-", "*", "/", "%"].includes(expression.slice(-1))) {
    expression = expression.slice(0, -1) + actualOp;
  } else {
    expression += actualOp;
  }

  // Display me symbol dikhao, expression me actual operator store karo
  display.value = expression
    .replace(/\*\*/g, "^")
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");
}

function allclear() {
  expression = "";
  display.value = "";
  justCalculated = false;
}

function clearOne() {
  if (expression.slice(-2) === "**") {
    expression = expression.slice(0, -2);
  } else {
    expression = expression.slice(0, -1);
  }
  display.value = expression
    .replace(/\*\*/g, "^")
    .replace(/\*/g, "×")
    .replace(/\//g, "÷") || "";
}

function sign() {
  if (!expression) return;

  let match = expression.match(/^(.*[\+\*\/\%])?(-?)(\d+\.?\d*)$/);
  if (!match) return;

  let before = match[1] || "";
  let hasNegative = match[2] === "-";
  let num = match[3];

  if (hasNegative) {
    expression = before + num;
  } else {
    expression = before + "-" + num;
  }

  display.value = expression
    .replace(/\*\*/g, "^")
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");
}

function calculate() {
  if (!expression) return;

  if (/\/0(\D|$)/.test(expression)) {
    display.value = "Invalid Expression";
    expression = "";
    justCalculated = true;
    return;
  }

  try {
    let result = eval(expression);

    if (result === Infinity || result === -Infinity || isNaN(result)) {
      display.value = "Invalid Expression";
      expression = "";
    } else {
      let final = parseFloat(result.toFixed(10));
      display.value = final;
      expression = String(final);
    }
  } catch (e) {
    display.value = "Invalid Expression";
    expression = "";
  }

  justCalculated = true;
}
