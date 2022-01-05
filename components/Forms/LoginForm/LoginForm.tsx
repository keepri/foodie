/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { authRef } from '#firebase/initClientApp';
import { reEmail, URLS } from 'utils/misc';

import Input from '#components/Input/Input';
import Button from '#components/Buttons/Button';
import { useRouter } from 'next/router';

interface Props {}

const LoginForm: React.FC<Props> = ({}) => {
	const [form, setForm] = React.useState({ email: '', password: '' });
	const [errors, setErrors] = React.useState({ emailErr: false, passwordErr: false });

	const { email, password } = form;
	const { emailErr, passwordErr } = errors;

	const { back } = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!emailErr && !passwordErr) {
			try {
				const { user } = await signInWithEmailAndPassword(authRef, email, password);

				if (user) {
					console.log('Login successful!');
					back();
				}
			} catch ({ code, message }) {
				console.error(message);
				(code === AuthErrorCodes.INVALID_EMAIL || code === AuthErrorCodes.USER_DELETED) &&
					setErrors({ emailErr: true, passwordErr: false });
				code === AuthErrorCodes.INVALID_PASSWORD && setErrors({ emailErr: false, passwordErr: true });
			}
		}
	};

	React.useEffect(() => {
		const emailValid = email.length > 0 ? !reEmail.test(email) : false;
		const passValid = password.length > 0 ? password.length < 6 && true : false;

		setErrors({ emailErr: emailValid, passwordErr: passValid });
	}, [form]);

	return (
		<form onSubmit={e => handleSubmit(e)} className=''>
			<Input
				type='email'
				label='Email'
				value={email}
				autoFocus
				inputMode='email'
				error={emailErr}
				onChange={e => handleChange(e)}
			/>
			<Input
				type='password'
				label='Password'
				value={password}
				error={passwordErr}
				onChange={e => handleChange(e)}
			/>
			<Button primary type='submit'>
				Submit
			</Button>
		</form>
	);
};

export default LoginForm;
