import React from 'react';
import type { NextPage } from 'next';
import Cart from '#modules/Cart/Cart';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<div>
			<Cart />
		</div>
	);
};

export default Page;
