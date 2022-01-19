export { firstToUpper };

const firstToUpper = (text: string): string =>
	text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase();
