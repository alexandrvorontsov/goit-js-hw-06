const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((list) => {
	const cat = list.firstElementChild.textContent;
	console.log(`Category: ${cat}`);

	const item = list.lastElementChild;
	const elem = item.querySelectorAll('li');
	console.log(`Elements: ${elem.length}`);
});
