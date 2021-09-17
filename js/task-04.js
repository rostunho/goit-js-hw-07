// elements
const valueRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

// functions
function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

// operations
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
