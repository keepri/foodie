import React from 'react';

import styles from './Pill.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement> &
	(
		| {
				label?: string;
				info: string | number;
				boldLabel?: undefined;
				boldInfo?: boolean;
				type?: 'horizontal' | 'vertical';
		  }
		| {
				label: string;
				boldLabel?: boolean;
				info: string | number;
				boldInfo?: boolean;
				type: 'horizontal' | 'vertical';
		  }
	);

const Pill: React.FC<Props> = ({ className, boldLabel, boldInfo, label, info, type, ...rest }) => {
	const horizontal = type === 'horizontal';
	label = label ? (horizontal ? label + ': ' : label + ':') : undefined;

	return (
		<div
			style={{ flexDirection: horizontal ? 'row' : 'column' }}
			className={[styles['pill'], className].join(' ')}
			{...rest}
		>
			{label ? (
				<>
					<small>{boldLabel ? <strong>{label}</strong> : label}</small>
					<small>{boldInfo ? <strong>{info}</strong> : info}</small>
				</>
			) : boldInfo ? (
				<small>
					<strong>{info}</strong>
				</small>
			) : (
				<small>{info}</small>
			)}
		</div>
	);
};

export default Pill;
