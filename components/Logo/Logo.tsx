import React from 'react';
import Image from 'next/image';

import styles from './Logo.module.scss';
import Link from '#components/Buttons/Link';
import { URLS } from '#utils/misc';

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<Props> = ({ className, ...rest }) => {
	return (
		<Link href={URLS.HOME} className={[styles['logo'], className].join(' ')} {...rest}>
			<Image src={'/images/f-png.png'} width={55} height={60} objectFit='contain' alt='F-logo' />
			<p className={styles['logo-text']}>oodie</p>
		</Link>
	);
};

export default Logo;
