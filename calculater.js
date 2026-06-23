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
  if (num === "." && expression.split(/[\+\-\*\/\%]/).pop().includes(".")) return;
  expression += num;
  display.value = expression.replace(/\*\*/g, '^');
}

function addOperator(op) {
  justCalculated = false;
  let actualOp = (op === '^') ? '**' : op;
  let lastTwo = expression.slice(-2);
  if (lastTwo === '**') {
    expression = expression.slice(0, -2);
  } else if (expression && '+-*/%'.includes(expression.slice(-1))) {
    expression = expression.slice(0, -1);
  }
  expression += actualOp;
  display.value = expression.replace(/\*\*/g, '^');
}

function allclear() {
  expression = "";
  display.value = "";
  justCalculated = false;
}

function clearOne() {
  if (expression.slice(-2) === '**') {
    expression = expression.slice(0, -2);
  } else {
    expression = expression.slice(0, -1);
  }
  display.value = expression.replace(/\*\*/g, '^');
}

function sign() {
  if (!expression) return;
  let match = expression.match(/(-?\d+\.?\d*)$/);
  if (match) {
    let num = match[1];
    let toggled = num.startsWith('-') ? num.slice(1) : '-' + num;
    expression = expression.slice(0, expression.length - num.length) + toggled;
    display.value = expression.replace(/\*\*/g, '^');
  }
}

function calculate() {
  if (!expression) return;
  try {
    let res = eval(expression);
    if (!isFinite(res)) {
      display.value = "Can't divide by zero";
      expression = "";
    } else {
      let finalResult = parseFloat(res.toFixed(10));
      display.value = finalResult;
      expression = String(finalResult);
    }
  } catch (e) {
    display.value = "Invalid Expression";
    expression = "";
  }
  justCalculated = true;
}