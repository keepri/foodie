import { UserType } from '#firebase/declarations/schemas';
import React from 'react';
import Image from 'next/image';

import styles from './AccountInfo.module.scss';
import { defaultAvatar } from '#utils/misc';

interface Props {
	user: UserType;
}

const AccountInfo: React.FC<Props> = ({ user }) => {
	const { name } = user;

	return (
		<section className={styles['account-info-container']}>
			<div className={styles['personal-information']}>
				<Image src={'logo' in user ? user.logo : defaultAvatar} width={60} height={60} alt='avatar' />
				<div className={styles['personal-information-text']}>
					<h4>{name}</h4>
				</div>
			</div>
		</section>
	);
};

export default AccountInfo;
