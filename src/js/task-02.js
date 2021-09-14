//elements
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

//functions
const createItemsForList = () => {
  const draftItems = [];

  ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    draftItems.push(item);
  });

  ingredientsRef.append(...draftItems);
};

//call
createItemsForList();
