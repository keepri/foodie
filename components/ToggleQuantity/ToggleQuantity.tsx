import React from 'react';
import Image from 'next/image';

import styles from './ToggleQuantity.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
	quantity: number;
	horizontal?: boolean;
	compact?: boolean;
	onToggle: (value: number) => void;
}

const ToggleQuantity: React.FC<Props> = ({ className, quantity, horizontal, onToggle, compact, ...rest }) => {
	return (
		<div
			style={{ flexDirection: horizontal ? 'row' : 'column' }}
			className={[
				styles['toggle'],
				horizontal ? styles['toggle-horizontal'] : styles['toggle-vertical'],
				compact && styles['toggle-compact'],
				className,
			].join(' ')}
			{...rest}
		>
			<div className={styles['toggle-image']}>
				<Image src={'/images/icons/arrow-svg.svg'} alt='arrow-up' layout='fill' onClick={() => onToggle(1)} />
			</div>

			<p className={styles['toggle-quantity']}>{quantity}</p>

			<div className={[styles['toggle-image'], quantity === 1 && styles['toggle-image-one']].join(' ')}>
				<Image
					src={quantity === 1 ? '/images/icons/trash-svg.svg' : '/images/icons/arrow-svg.svg'}
					alt='arrow-down'
					layout='fill'
					onClick={() => onToggle(-1)}
				/>
			</div>
		</div>
	);
};

export default ToggleQuantity;
