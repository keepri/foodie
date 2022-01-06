import React from 'react';
import Image from 'next/image';

import styles from './ToggleQuantity.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
	quantity: number;
	onToggle: (value: number) => void;
}

const ToggleQuantity: React.FC<Props> = ({ className, quantity, onToggle, ...rest }) => {
	return (
		<div className={[styles['toggle'], className].join(' ')} {...rest}>
			<Image
				src={'/images/icons/arrow.png'}
				alt='arrow-up'
				width={15}
				height={15}
				className={styles['toggle-image']}
				onClick={() => onToggle(1)}
			/>
			<p className={styles['toggle-quantity']}>{quantity}</p>
			<Image
				src={'/images/icons/arrow.png'}
				alt='arrow-down'
				width={15}
				height={15}
				className={styles['toggle-image']}
				onClick={() => onToggle(-1)}
			/>
		</div>
	);
};

export default ToggleQuantity;
