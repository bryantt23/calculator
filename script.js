let curNum = 0,
  prevNum = 0,
  operator = '+';

const calculatorButtons = document.querySelectorAll('.calculator-buttons');
console.log(calculatorButtons);
calculatorButtons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.classList);
    console.log(e.target.classList.contains('number-button'));
    console.log(e.target.innerText);

    if (e.target.classList.contains('number-button')) {
      curNum = curNum * 10 + Number(e.target.innerText);
      updateDisplayNumber(curNum);
    } else if (e.target.classList.contains('operator')) {
      let nextOperator = e.target.innerText;
      let res = operate(prevNum, curNum, operator);
      updateDisplayNumber(res);
      prevNum = res;
      curNum = 0;
      operator = nextOperator;
    } else if (e.target.classList.contains('equals')) {
      if (operator === '/' && curNum === 0) {
        alert("You can't divide by zero");
        return;
      }
      let res = operate(prevNum, curNum, operator);
      updateDisplayNumber(res);
      prevNum = 0;
      curNum = res;
      operator = '+';
    } else if (e.target.classList.contains('clear')) {
      resetVariables();
      clearDisplay();
    }
  });
});

const displayNumber = document.querySelector('.output-number');

function resetVariables() {
  curNum = 0;
  prevNum = 0;
  operator = '+';
}

function clearDisplay() {
  displayNumber.innerText = 0;
}

function updateDisplayNumber(num) {
  displayNumber.innerText = num;
}

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
  let res;
  if (operator === '+') {
    res = add(a, b);
  } else if (operator === '-') {
    res = subtract(a, b);
  } else if (operator === '*') {
    res = multiply(a, b);
  } else {
    res = divide(a, b);
  }
  return Math.trunc(res, 1);
}
