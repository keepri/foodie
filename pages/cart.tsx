import React from 'react';
import type { NextPage } from 'next';
import Cart from '#modules/Cart/Cart';
import NoSSR from '#components/NoSSR/NoSSR';

import styles from '#styles/pages/CartPage.module.scss';

interface Props {}

const CartPage: NextPage<Props> = ({}) => {
	return (
		<NoSSR>
			<main className={['container', styles['cart-page']].join(' ')}>
				<Cart page />
			</main>
		</NoSSR>
	);
};

export default CartPage;
