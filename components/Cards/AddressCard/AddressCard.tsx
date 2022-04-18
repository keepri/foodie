import { Address } from '#firebase/declarations/interfaces';
import React from 'react';

import styles from './AddressCard.module.scss';

interface Props {
	address: Address;
}

const AddressCard: React.FC<Props> = ({ address }) => {
	const { country, county, city, street, number, alias, extra } = address;

	return (
		<div className={styles['address-card-container']}>
			<h4>{alias}</h4>
		</div>
	);
};

export default AddressCard;
