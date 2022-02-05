import React from 'react';

import { ClientRegisterFields } from '#firebase/declarations/interfaces';

import Button from '#components/Buttons/Button';

import styles from './RegisterForm.module.scss';
import Input from '#components/Input/Input';
import { getLang } from '#controllers/getLang';
import { registerUser } from '#controllers/registerUser';
import { reEmail, rePhone } from 'utils/misc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authRef } from '#firebase/initClientApp';
import { checkPasswordsMatch } from '#controllers/validation/checkPasswordsMatch';
import Checkbox from '#components/Checkbox/Checkbox';
import { InputChangeEvent } from '#declarations/types/Misc';

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
	const lang = getLang();

	const { current: initForm } = React.useRef({
		email: '',
		password: '',
		confPassword: '',
		phone: '',
		name: '',
	});
	const { current: initErrors } = React.useRef({
		emailErr: false,
		passwordErr: false,
		confPasswordErr: false,
		nameErr: false,
		phoneErr: false,
	});

	const [showPass, setShowPass] = React.useState<boolean>(false);
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
		// confPasswordMsg,
		nameMsg,
		phoneMsg,
	} = errors;

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value })),
		[],
	);

	const handleShowPass = React.useCallback((e: InputChangeEvent) => {
		setShowPass(e.target.checked);
	}, []);

	const handleSubmit = React.useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
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
		},
		[confPasswordErr, email, emailErr, name, nameErr, password, passwordErr, phone, phoneErr, setModal],
	);

	React.useEffect(() => {
		!modal &&
			email &&
			password &&
			signInWithEmailAndPassword(authRef, email, password).then(res => console.log(res));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modal]);

	React.useEffect(() => {
		const emailError = email.length > 0 ? !reEmail.test(email) : false;
		const passError = password.length > 0 ? password.length < 6 && true : false;
		// const confPassError = confPassword.length > 0 ? confPassword.length < 6 && true : false;
		const confPassError = false;
		// TODO test name if contains bad words, etc...
		const nameError = false;
		const phoneError =
			phone.length > 0 ? (phone.length >= 10 && phone.length <= 13 ? !rePhone.test(phone) : true) : false;
		const passwordsNoMatch = checkPasswordsMatch(password, confPassword);

		console.log(rePhone.test(phone));

		setErrors({
			emailErr: emailError,
			passwordErr: passError || passwordsNoMatch,
			confPasswordErr: confPassError || passwordsNoMatch,
			nameErr: nameError,
			nameMsg: nameError ? lang.alertName : undefined,
			phoneErr: phoneError,
			phoneMsg: phoneError ? lang.alertPhone : undefined,
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
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [confPassword, email, password, phone, name]);

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
				onChange={handleChange}
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
				onChange={handleChange}
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
				onChange={handleChange}
			/>
			{/* PASSWORD */}
			<Input
				required
				autoComplete='new-password'
				placeholder={lang.password}
				name='password'
				type={showPass ? 'text' : 'password'}
				label={lang.password}
				value={password}
				error={passwordErr}
				errorMsg={passwordMsg}
				onChange={handleChange}
			/>
			{/* CONFIRM PASSWORD */}
			{/* <Input
				required
				placeholder={lang.confirmPassword}
				name='confPassword'
				type={showPass ? 'text' : 'password'}
				name='confPassword'
				label={lang.confirmPassword}
				value={confPassword}
				error={confPasswordErr}
				errorMsg={confPasswordMsg}
				onChange={handleChange}
			/> */}
			{/* SHOW PASS TOGGLE */}
			<Checkbox
				text={lang.showPass}
				checked={showPass}
				onCheck={handleShowPass}
				className={styles.formShowPassCheckbox}
			/>
			<Button primary fullWidth type='submit' className={styles.formSubmit}>
				{lang.signUp}
			</Button>
		</form>
	);
};

export default RegisterForm;
