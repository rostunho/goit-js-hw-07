// elements
const dataInputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-action="render"]');
const clearBtn = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const virtualBoxes = [];

// functions
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const createBoxes = amount => {
  amount = dataInputRef.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    virtualBoxes.push(box);
    box.style.width = `${virtualBoxes.indexOf(box) * 10 + 30}px`;
    box.style.height = `${virtualBoxes.indexOf(box) * 10 + 30}px`;
    box.style.margin = '2px';
    box.style.backgroundColor = makeRandomColor();
  }
  boxesRef.append(...virtualBoxes);
  dataInputRef.value = '';
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  virtualBoxes.splice(0, virtualBoxes.length);
};

// operations
createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);
