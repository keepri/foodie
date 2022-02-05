import Modal from '#components/Modal/Modal';
import { getLang } from '#controllers/getLang';
import React from 'react';

// import styles from './ModalAccountCreateSuccess.module.scss';

interface Props {
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountCreateSuccess: React.FC<Props> = ({ setModal }) => {
	const lang = getLang();

	return (
		<Modal title={lang.accountCreateSuccessTitle} body={lang.accountCreateSuccessBody} setModal={setModal} />
	);
};

export default AccountCreateSuccess;
