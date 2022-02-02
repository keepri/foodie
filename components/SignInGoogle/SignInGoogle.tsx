import { getLang } from '#controllers/getLang';
import React from 'react';
import Image from 'next/image';

import styles from './SignInGoogle.module.scss';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	fullWidth?: boolean;
}

const SignInGoogle: React.FC<Props> = ({ className, fullWidth, onMouseUp, ...rest }) => {
	const lang = getLang();

	const handleGoogleSignIn = React.useCallback(
		async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			onMouseUp && onMouseUp(e);
		},
		[onMouseUp],
	);

	return (
		<button
			type='button'
			className={[styles['sign-in-google'], fullWidth && styles['fullWidth'], className].join(' ')}
			onMouseUp={handleGoogleSignIn}
			{...rest}
		>
			<Image src={'/images/icons/google.svg'} width={20} height={20} alt='google-icon' />
			{lang.signInWithGoogle}
		</button>
	);
};

export default SignInGoogle;
