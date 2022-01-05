import React from 'react';

import styles from './Button.module.scss';

import { Url } from '#declarations/types/Misc';

type ButtonRefType = React.ForwardedRef<HTMLButtonElement>;

interface Props {
	href?: Url;
	className?: string;
	primary?: boolean;
	secondary?: boolean;
}

const Button = React.forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>
>(({ children, href, className, primary, secondary, ...rest }, ref) => {
	return (
		<button
			ref={ref as ButtonRefType}
			className={[
				styles['button'],
				primary && styles['button-primary'],
				secondary && styles['button-secondary'],
				className,
			].join(' ')}
			{...rest}
		>
			{children}
		</button>
	);
});

export default Button;
