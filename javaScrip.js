const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let currentOperation = '';


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clear')) {
      display.value = '';
      currentOperation = '';
    } else if (button.classList.contains('equals')) {
      display.value = eval(currentOperation);
      currentOperation = '';
    } else {
      currentOperation += button.innerText;
      display.value = currentOperation;
    }
  });
});
  