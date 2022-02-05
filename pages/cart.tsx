import React from 'react';
import type { NextPage } from 'next';
import Cart from '#modules/Cart/Cart';
import NoSSR from '#components/NoSSR/NoSSR';

import styles from '#styles/pages/CartPage.module.scss';
import NoItemsInCart from '#modules/Modals/NoItemsInCart';
import OrderPlaceSuccess from '#modules/Modals/OrderPlaceSuccess';

interface Props {}

const CartPage: NextPage<Props> = ({}) => {
	const [modalNoItems, setModalNoItems] = React.useState<boolean>(false);
	const [modalOrderSuccess, setModalOrderSuccess] = React.useState<boolean>(false);

	const handleNoItems = React.useCallback(() => {
		setModalNoItems(true);
	}, []);

	const handleOrderSuccess = React.useCallback(() => {
		setModalOrderSuccess(true);
	}, []);

	return (
		<NoSSR>
			<main className={['container', styles['cart-page']].join(' ')}>
				<Cart page onNoItems={handleNoItems} onOrderSuccess={handleOrderSuccess} />

				{/* MODALS */}
				{modalNoItems && <NoItemsInCart setModal={setModalNoItems} />}
				{modalOrderSuccess && <OrderPlaceSuccess setModal={setModalOrderSuccess} />}
			</main>
		</NoSSR>
	);
};

export default CartPage;
