import React from 'react';
import type { NextPage } from 'next';
import Cart from '#modules/Cart/Cart';
import NoSSR from '#components/NoSSR/NoSSR';

interface Props {}

const CartPage: NextPage<Props> = ({}) => {
	return (
		<NoSSR>
			<main className='container'>
				<Cart />
			</main>
		</NoSSR>
	);
};

export default CartPage;
