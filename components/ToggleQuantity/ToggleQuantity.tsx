import React from 'react';
import Image from 'next/image';

import styles from './ToggleQuantity.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
	quantity: number;
	horizontal?: boolean;
	onToggle: (value: number) => void;
}

const ToggleQuantity: React.FC<Props> = ({ className, quantity, horizontal, onToggle, ...rest }) => {
	return (
		<div
			style={{ flexDirection: horizontal ? 'row' : 'column' }}
			className={[
				styles['toggle'],
				horizontal ? styles['toggle-horizontal'] : styles['toggle-vertical'],
				className,
			].join(' ')}
			{...rest}
		>
			<div className={styles['toggle-image']}>
				<Image src={'/images/icons/arrow.svg'} alt='arrow-up' layout='fill' onClick={() => onToggle(1)} />
			</div>

			<p className={styles['toggle-quantity']}>{quantity}</p>

			<div className={styles['toggle-image']}>
				<Image src={'/images/icons/arrow.svg'} alt='arrow-down' layout='fill' onClick={() => onToggle(-1)} />
			</div>
		</div>
	);
};

export default ToggleQuantity;
