export { parseTokenString };

const parseTokenString = (tokenString: string) => {
	const tokenSplit = tokenString.split(' ');

	return {
		pre: tokenSplit?.[0],
		tokenString: tokenSplit?.[1],
	};
};
