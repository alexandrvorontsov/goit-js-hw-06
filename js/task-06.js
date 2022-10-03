const inputData = document.querySelector('input');

const addInputText = (event) => {
	event.currentTarget.value.length === Number(inputData.dataset.length)
		? inputData.setAttribute('class', 'valid')
		: inputData.setAttribute('class', 'invalid');
};

inputData.addEventListener('blur', addInputText);
