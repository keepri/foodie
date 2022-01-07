/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { authRef } from '#firebase/initClientApp';
import { reEmail } from 'utils/misc';

import Input from '#components/Input/Input';
import Button from '#components/Buttons/Button';
import { useRouter } from 'next/router';

import styles from './LoginForm.module.scss';
import { getLang } from '#controllers/getLang';

type FormErrors = { emailErr: boolean; passwordErr: boolean; emailMsg?: string; passwordMsg?: string };

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
	onLoginSuccess?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<Props> = ({ className, onLoginSuccess, ...rest }) => {
	const [form, setForm] = React.useState({ email: '', password: '' });
	const [errors, setErrors] = React.useState<FormErrors>({ emailErr: false, passwordErr: false });

	const { email, password } = form;
	const { emailErr, passwordErr, emailMsg, passwordMsg } = errors;

	const lang = getLang();

	const { push, back, query } = useRouter();

	const { redirect } = query as { redirect: string };
	console.log(query);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emailEmpty = email.length === 0;
		const passEmpty = password.length === 0;

		if (emailEmpty || passEmpty) {
			setErrors({ emailErr: emailEmpty, passwordErr: passEmpty });
			return;
		}

		if (!emailErr && !passwordErr) {
			try {
				await signInWithEmailAndPassword(authRef, email, password);

				onLoginSuccess && onLoginSuccess(e);
				redirect ? push(redirect) : back();
			} catch ({ code, message }) {
				console.error(message);
				(code === AuthErrorCodes.INVALID_EMAIL || code === AuthErrorCodes.USER_DELETED) &&
					setErrors({ emailErr: true, passwordErr: false, emailMsg: lang.alertNoAccount });
				code === AuthErrorCodes.INVALID_PASSWORD &&
					setErrors({ emailErr: false, passwordErr: true, passwordMsg: lang.alertPasswordWrong });
			}
		}
	};

	React.useEffect(() => {
		const emailError = email.length > 0 ? !reEmail.test(email) : false;
		const passError = password.length > 0 ? password.length < 6 && true : false;

		setErrors({
			emailErr: emailError,
			passwordErr: passError,
			emailMsg: emailError ? lang.alertEmail : undefined,
			passwordMsg: passError ? lang.alertPasswordInvalid : undefined,
		});
	}, [form]);

	return (
		<form onSubmit={e => handleSubmit(e)} className={[styles.form, className].join(' ')} {...rest}>
			<Input
				required
				autoComplete='email'
				placeholder={lang.email}
				type='email'
				label={lang.email}
				value={email}
				autoFocus
				inputMode='email'
				error={emailErr}
				errorMsg={emailMsg}
				onChange={e => handleChange(e)}
			/>
			<Input
				required
				autoComplete='current-password'
				placeholder={lang.password}
				type='password'
				label={lang.password}
				value={password}
				error={passwordErr}
				errorMsg={passwordMsg}
				onChange={e => handleChange(e)}
			/>
			<Button primary type='submit'>
				Submit
			</Button>
		</form>
	);
};

export default LoginForm;
