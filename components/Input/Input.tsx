import React from 'react';

import styles from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: React.HTMLInputTypeAttribute;
	className?: string;
	name?: string;
	label?: string;
	labelStyle?: React.CSSProperties;
	labelClassName?: string;
	error?: boolean;
}

const Input: React.FC<Props> = ({
	label,
	labelStyle,
	labelClassName,
	type = 'text',
	className,
	name,
	error,
	...rest
}) => {
	return (
		<>
			{label && (
				<label htmlFor={name ?? type} style={labelStyle} className={[styles.label, labelClassName].join(' ')}>
					{label}
				</label>
			)}
			<input
				autoCorrect='off'
				autoComplete='off'
				autoCapitalize='none'
				name={name ?? type}
				type={type}
				className={[styles.input, error && 'error-input', className].join(' ')}
				{...rest}
			/>
		</>
	);
};

export default Input;
