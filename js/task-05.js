// elements
const inputNameRef = document.querySelector('#name-input');
// console.log(inputNameRef);
const userNameRef = document.querySelector('#name-output');
// console.log(userNameRef);

// function
function onInputChange(event) {
  event.currentTarget.value === ''
    ? (userNameRef.textContent = 'незнакомец')
    : (userNameRef.textContent = event.currentTarget.value);
}

// operation
inputNameRef.addEventListener('input', onInputChange);
