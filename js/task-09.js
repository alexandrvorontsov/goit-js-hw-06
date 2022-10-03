const btn = document.querySelector('button');
const spanContent = document.querySelector('span');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgrColor(event) {
	const getRandomColorValue = getRandomHexColor();
	document.body.style.backgroundColor = getRandomColorValue;
	spanContent.textContent = getRandomColorValue;
}

btn.addEventListener('click', changeBodyBgrColor);
