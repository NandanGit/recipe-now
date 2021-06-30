export const capitalize = (sentence) => {
	return sentence[0].toUpperCase() + sentence.slice(1);
};

export const toTitle = (sentence) =>
	sentence
		.trim()
		.split(' ')
		.map((word) => capitalize(word))
		.join(' ');
