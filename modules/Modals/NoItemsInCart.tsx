import Modal from '#components/Modal/Modal';
import { getLang } from '#controllers/getLang';
import React, { SetStateAction } from 'react';

// import styles from './ModalNoItemsInCart.module.scss';

interface Props {
	setModal: React.Dispatch<SetStateAction<boolean>>;
}

const NoItemsInCart: React.FC<Props> = ({ setModal }) => {
	const lang = getLang();

	return <Modal title={lang.noItemsInCartTitle} body={lang.noItemsInCartBody} setModal={setModal} />;
};

export default NoItemsInCart;
