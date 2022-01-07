export { checkPasswordsMatch };

const checkPasswordsMatch = (pass1: string, pass2: string) =>
	(pass1.length === pass2.length || pass2.length > pass1.length) && pass1 !== pass2;
