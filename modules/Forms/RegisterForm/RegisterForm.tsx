import React from 'react';

import { ClientRegisterFields } from '#firebase/declarations/interfaces';

import Button from '#components/Buttons/Button';

import styles from './RegisterForm.module.scss';
import Input from '#components/Input/Input';
import { getLang } from '#controllers/getLang';
import { registerUser } from '#controllers/registerUser';
import { reEmail } from 'utils/misc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authRef } from '#firebase/initClientApp';
import { checkPasswordsMatch } from '#controllers/validation/checkPasswordsMatch';

type FormErrors = {
	emailErr: boolean;
	passwordErr: boolean;
	confPasswordErr: boolean;
	nameErr: boolean;
	phoneErr: boolean;

	emailMsg?: string;
	passwordMsg?: string;
	confPasswordMsg?: string;
	nameMsg?: string;
	phoneMsg?: string;
};

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
	modal?: boolean;
	setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: React.FC<Props> = ({ className, modal, setModal, ...rest }) => {
	const initForm = {
		email: '',
		password: '',
		confPassword: '',
		phone: '',
		name: '',
	};
	const initErrors = {
		emailErr: false,
		passwordErr: false,
		confPasswordErr: false,
		nameErr: false,
		phoneErr: false,
	};
	const [form, setForm] = React.useState<ClientRegisterFields & { confPassword: string }>(initForm);
	const [errors, setErrors] = React.useState<FormErrors>(initErrors);

	const { email, password, confPassword, name, phone } = form;
	const {
		emailErr,
		passwordErr,
		confPasswordErr,
		nameErr,
		phoneErr,
		emailMsg,
		passwordMsg,
		confPasswordMsg,
		nameMsg,
		phoneMsg,
	} = errors;

	const lang = getLang();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!emailErr && !passwordErr && !confPasswordErr && !nameErr && !phoneErr) {
			const regForm = { email, password, name, phone };

			try {
				await registerUser(regForm);
				setModal && setModal(true);
			} catch ({ code, message }) {
				console.warn('Register failed with:', code, message);
				// TODO handle errors
			}
		}
	};

	React.useEffect(() => {
		!modal &&
			email &&
			password &&
			signInWithEmailAndPassword(authRef, email, password).then(res => console.log(res));
	}, [modal]);

	React.useEffect(() => {
		const emailError = email.length > 0 ? !reEmail.test(email) : false;
		const passError = password.length > 0 ? password.length < 6 && true : false;
		const confPassError = confPassword.length > 0 ? confPassword.length < 6 && true : false;
		// TODO test name if contains bad words, etc...
		const nameError = false;
		// TODO verify if string entered is phone number
		const phoneError = false;
		const passwordsNoMatch = checkPasswordsMatch(password, confPassword);

		setErrors({
			emailErr: emailError,
			passwordErr: passError || passwordsNoMatch,
			confPasswordErr: confPassError || passwordsNoMatch,
			nameErr: nameError,
			phoneErr: phoneError,
			emailMsg: emailError ? lang.alertEmail : undefined,
			passwordMsg: passwordsNoMatch
				? lang.alertPassswordNoMatch
				: passError
				? lang.alertPasswordInvalid
				: undefined,
			confPasswordMsg: passwordsNoMatch
				? lang.alertPassswordNoMatch
				: confPassError
				? lang.alertPasswordInvalid
				: undefined,
			nameMsg: nameError ? lang.alertName : undefined,
			phoneMsg: phoneError ? lang.alertPhone : undefined,
		});
	}, [form]);

	return (
		<form className={[styles.form, className].join(' ')} onSubmit={e => handleSubmit(e)} {...rest}>
			{/* NAME */}
			<Input
				required
				autoComplete='name'
				autoFocus
				placeholder={lang.name}
				name='name'
				type='text'
				label={lang.name}
				value={name}
				error={nameErr}
				errorMsg={nameMsg}
				onChange={e => handleChange(e)}
			/>
			{/* PHONE */}
			<Input
				required
				autoComplete='tel'
				placeholder={lang.phone}
				name='phone'
				type='tel'
				label={lang.phone}
				value={phone}
				inputMode='tel'
				error={phoneErr}
				errorMsg={phoneMsg}
				onChange={e => handleChange(e)}
			/>
			{/* EMAIL */}
			<Input
				required
				autoComplete='email'
				placeholder={lang.email}
				type='email'
				label={lang.email}
				value={email}
				inputMode='email'
				error={emailErr}
				errorMsg={emailMsg}
				onChange={e => handleChange(e)}
			/>
			{/* PASSWORD */}
			<Input
				required
				placeholder={lang.password}
				type='password'
				label={lang.password}
				value={password}
				error={passwordErr}
				errorMsg={passwordMsg}
				onChange={e => handleChange(e)}
			/>
			{/* CONFIRM PASSWORD */}
			<Input
				required
				placeholder={lang.confirmPassword}
				type='password'
				name='confPassword'
				label={lang.confirmPassword}
				value={confPassword}
				error={confPasswordErr}
				errorMsg={confPasswordMsg}
				onChange={e => handleChange(e)}
			/>
			<Button primary type='submit'>
				Submit
			</Button>
		</form>
	);
};

export default RegisterForm;
