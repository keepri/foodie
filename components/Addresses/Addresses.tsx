import Button from '#components/Buttons/Button';
import AddressCard from '#components/Cards/AddressCard/AddressCard';
import { getLang } from '#controllers/getLang';
import { Address } from '#firebase/declarations/interfaces';
import React from 'react';

import styles from './Addresses.module.scss';

interface Props {
	addresses: Address[];
}

const Addresses: React.FC<Props> = ({ addresses }) => {
	const lang = getLang();

	const handleAddAddress = React.useCallback(() => {}, []);

	return (
		<div className={styles['addresses-container']}>
			<h2>{lang.addressesTitle}</h2>
			<ul className={styles['addresses-list']}>
				{addresses.map((address, index) => (
					<li key={`address-list-item-${index}`}>
						<AddressCard address={address} />
					</li>
				))}
			</ul>
			<Button secondary onClick={handleAddAddress}>
				{lang.addAddress}
			</Button>
		</div>
	);
};

export default Addresses;
