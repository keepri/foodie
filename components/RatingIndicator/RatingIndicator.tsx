import Image from 'next/image';
import React from 'react';

import styles from './RatingIndicator.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	rating: number;
	type: 'small' | 'large';
	compact?: boolean;
}

const RatingIndicator: React.FC<Props> = ({ rating, type, compact, className, ...rest }) => {
	const noOfIndicators = new Array(5).fill('');
	const indicatorSize = type === 'small' ? 15 : 25;
	const indicatorSizeCompact = 12;

	return (
		<div
			style={{
				gap: indicatorSize * 0.25,
			}}
			className={[styles['rating-indicator'], className].join(' ')}
			{...rest}
		>
			{compact ? (
				<>
					<p className={styles['rating-indicator-number']}>{Math.ceil(rating)}</p>
					<Image
						src={'/images/icons/star-filled.png'}
						width={indicatorSizeCompact}
						height={indicatorSizeCompact}
						objectFit='contain'
						alt='star-filled'
					/>
				</>
			) : (
				noOfIndicators.map((_, index) =>
					index < rating ? (
						<Image
							src={'/images/icons/star-filled.png'}
							width={indicatorSize}
							height={indicatorSize}
							objectFit='contain'
							alt='star-filled'
						/>
					) : (
						<Image
							src={'/images/icons/star-empty.png'}
							width={indicatorSize}
							height={indicatorSize}
							objectFit='contain'
							alt='star-empty'
						/>
					),
				)
			)}
		</div>
	);
};

export default RatingIndicator;
