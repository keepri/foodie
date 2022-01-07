import { closeWithEsc } from '#controllers/closeWithEsc';
import Image from 'next/image';
import React from 'react';

import styles from './Modal.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	titleDescription?: string;
	body?: string;
	setModal: (bool: boolean) => void;
	onModalClose?: () => void;
}

const Modal: React.FC<Props> = ({
	children,
	className,
	title,
	titleDescription,
	body,
	setModal,
	onModalClose,
}) => {
	const handleClose = () => setModal(false);

	closeWithEsc(handleClose);

	React.useEffect(() => onModalClose && onModalClose(), []);

	return (
		<div onMouseUp={() => handleClose()} className={[styles['modal'], className].join(' ')}>
			<div
				onMouseUp={e => (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())}
				className={styles['modal-content']}
			>
				<header className={styles['modal-header']}>
					{title && (
						<div className={styles['title']}>
							{titleDescription && <p>{titleDescription}</p>}
							<h1>{title}</h1>
						</div>
					)}
					<Image
						src={'/images/icons/close.png'}
						width={20}
						height={20}
						objectFit='contain'
						alt='close'
						onMouseUp={() => handleClose()}
					/>
				</header>
				{(children || body) && (
					<section className={styles['modal-body']}>
						{body && <p>{body}</p>}
						{children}
					</section>
				)}
			</div>
		</div>
	);
};

export default Modal;
