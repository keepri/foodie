import React from 'react';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import Cart from '#modules/Cart/Cart';

interface Props {}

const CartPage: NextPage<Props> = ({}) => {
	return (
		<main className='container'>
			<Cart />
		</main>
	);
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
