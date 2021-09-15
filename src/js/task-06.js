// element
const inputDataRef = document.querySelector('#validation-input');

inputDataRef.placeholder = `Введи ${inputDataRef.dataset.length} символов`;

// function
function changeBorderColor(event) {
  const currentLength = event.currentTarget.value.length;
  const targetLength = parseInt(event.currentTarget.dataset.length);

  if (currentLength === targetLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
  if (currentLength !== targetLength) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
  if (currentLength === 0) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.remove('valid');
  }
}

// operation
inputDataRef.addEventListener('blur', changeBorderColor);
