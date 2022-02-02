import React from 'react';

import styles from './Button.module.scss';

type ButtonRefType = React.ForwardedRef<HTMLButtonElement>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	simple?: boolean;
	primary?: boolean;
	secondary?: boolean;
	fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<Props>>(
	({ children, className, simple, type, fullWidth, primary, secondary, ...rest }, ref) => {
		return (
			<button
				ref={ref as ButtonRefType}
				type={type ?? 'button'}
				className={[
					simple ? styles['button-simple'] : styles['button'],
					fullWidth && 'full-width',
					primary && styles['button-primary'],
					secondary && styles['button-secondary'],
					className,
				].join(' ')}
				{...rest}
			>
				{children}
			</button>
		);
	},
);

export default Button;
