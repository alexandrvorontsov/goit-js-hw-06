const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsElm = document.querySelector('#ingredients');
function addToList(arr) {
	ingredientsElm.append(
		...arr.map((ingredient) => {
			const item = document.createElement('li');
			item.classList.add('item');
			item.textContent = ingredient;
			return item;
		})
	);
}
addToList(ingredients);
