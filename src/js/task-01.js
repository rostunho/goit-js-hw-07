//elements
const itemsRef = document.querySelectorAll('#categories .item');

//functions
const getCategoryQuantity = () =>
  console.log(`В списке ${itemsRef.length} категории.`);

const getItemsDescriprion = () => {
  itemsRef.forEach(item => {
    const titleRef = item.querySelector('.item h2');
    const itemsListRef = item.querySelectorAll('ul li');

    console.log(`Категория: ${titleRef.textContent}`);
    console.log(`Количество элементов: ${itemsListRef.length}`);
  });
};

//calls
getCategoryQuantity();
getItemsDescriprion();
