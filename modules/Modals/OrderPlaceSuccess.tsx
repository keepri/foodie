import Modal from '#components/Modal/Modal';
import { getLang } from '#controllers/getLang';
import { useRouter } from 'next/router';
import React from 'react';
import { URLS } from 'utils/misc';

// import styles from './ModalOrderPlaceSuccess.module.scss';

interface Props {
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderPlaceSuccess: React.FC<Props> = ({ setModal }) => {
	const lang = getLang();

	const { push } = useRouter();

	const handleModalClose = React.useCallback(() => {
		push(URLS.ORDERS);
	}, []);

	return (
		<Modal
			title={lang.orderPlaceSuccessTitle}
			body={lang.orderPlaceSuccessBody}
			setModal={setModal}
			onModalClose={handleModalClose}
		/>
	);
};

export default OrderPlaceSuccess;
