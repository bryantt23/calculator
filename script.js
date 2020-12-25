function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(a, b, operator) {
  if (operator === '+') {
    add(a, b);
  } else if (operator === '-') {
    subtract(a, b);
  } else if (operator === '*') {
    multiply(a, b);
  } else {
    divide(a, b);
  }
}

let curNum = 0;
const calculatorButtons = document.querySelectorAll('.calculator-buttons');
console.log(calculatorButtons);
calculatorButtons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.classList);
    console.log(e.target.classList.contains('number-button'));
    console.log(e.target.innerText);

    if (e.target.classList.contains('number-button')) {
      curNum = curNum * 10 + Number(e.target.innerText);
    }
    console.log(curNum);
  });
});
