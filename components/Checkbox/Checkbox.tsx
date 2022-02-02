import React from 'react';

import styles from './Checkbox.module.scss';

import { InputChangeEvent } from '#declarations/types/Misc';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
	text: string;
	checked: boolean;
	onCheck: (e: InputChangeEvent) => void;
}

const Checkbox: React.FC<Props> = ({ className, text, checked, onCheck, ...rest }) => {
	const handleChange = React.useCallback(
		(e: InputChangeEvent) => {
			onCheck(e);
		},
		[onCheck],
	);

	return (
		<label className={[styles['checkbox'], className].join(' ')} {...rest}>
			<input type='checkbox' checked={checked} onChange={handleChange} />
			{text}
		</label>
	);
};

export default Checkbox;
