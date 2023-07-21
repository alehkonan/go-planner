const getCategoriesButton = document.getElementById('getCategoriesButton');
const categoriesList = document.getElementById('categoriesList');

getCategoriesButton.addEventListener('click', async () => {
  const buttonText = getCategoriesButton.textContent;
  getCategoriesButton.textContent = 'Loading';
  getCategoriesButton.setAttribute('disabled', true);

  const response = await fetch('/api/categories');
  const categories = await response.json();

  getCategoriesButton.textContent = buttonText;
  getCategoriesButton.removeAttribute('disabled');

  if (Array.isArray(categories) && categories.length > 0) {
    const items = categories.map((category) => {
      const item = document.createElement('li');
      item.textContent = category.name;
      return item;
    });

    categoriesList.replaceChildren(...items);
  } else {
    const item = document.createElement('li');
    item.textContent = 'No categories found';
    categoriesList.replaceChildren(item);
  }
});
