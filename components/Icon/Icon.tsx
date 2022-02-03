import React from 'react';

import styles from './Icon.module.scss';

import Image from 'next/image';

interface Props {
	icon: string;
	size: 'small' | 'medium' | 'large';
}

const Icon: React.FC<Props> = ({ icon, size }) => {
	const alt = React.useMemo(() => {
		const iconPathSplit = icon.split('/');
		const alt = iconPathSplit[iconPathSplit.length - 1].split('.')[0];

		return alt;
	}, [icon]);

	const iconSize = React.useMemo(
		() => (size === 'small' ? 20 : size === 'medium' ? 25 : size === 'large' ? 30 : 25),
		[size],
	);

	return (
		<Image className={styles['icon']} src={icon} width={iconSize} height={iconSize} alt={`${alt}-icon`} />
	);
};

export default Icon;