const inputData = document.querySelector('input');
const textSpan = document.querySelector('span');

const changeFontSize = (event) => {
	textSpan.style.fontSize = `${event.currentTarget.value}px`;
};
inputData.addEventListener('input', changeFontSize);
