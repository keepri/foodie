import React from 'react';

import styles from './Button.module.scss';

type ButtonRefType = React.ForwardedRef<HTMLButtonElement>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	secondary?: boolean;
	fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<Props>>(
	({ children, className, fullWidth, primary, secondary, ...rest }, ref) => {
		return (
			<button
				ref={ref as ButtonRefType}
				className={[
					styles['button'],
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
