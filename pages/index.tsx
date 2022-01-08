import React from 'react';
import type { NextPage } from 'next';

import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';
import DoubleCard from '#modules/DoubleCard/DoubleCard';

import { baseRestaurant } from 'utils/baseForms';
import { RESTAURANT_STATUS } from '#firebase/declarations/enums';

interface Props {}

const Index: NextPage<Props> = ({}) => {
	const {
		auth: { user },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));

	return (
		<main>
			<h1>Hello{`, ${user.name}`}</h1>

			<DoubleCard restaurant={{ ...baseRestaurant, status: RESTAURANT_STATUS.OPEN }} />
			<DoubleCard restaurant={{ ...baseRestaurant, status: RESTAURANT_STATUS.OPEN }} />
			<DoubleCard restaurant={{ ...baseRestaurant, status: RESTAURANT_STATUS.OPEN }} />
			<DoubleCard restaurant={{ ...baseRestaurant, status: RESTAURANT_STATUS.OPEN }} />
			<DoubleCard restaurant={baseRestaurant} />
			<DoubleCard restaurant={baseRestaurant} />
			<DoubleCard restaurant={baseRestaurant} />
		</main>
	);
};

export default Index;
